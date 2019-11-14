import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaSpinner } from 'react-icons/fa';
import api from '../../services/api';

import Container from '../../components/Container';
import {
  Loading,
  Owner,
  IssueList,
  RepoInfo,
  IssueState,
  PageNavigation,
} from './styles';

class Repository extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    repository: {},
    issues: [],
    loading: true,
    issueState: 'all',
    page: 1,
  };

  async componentDidMount() {
    const { match } = this.props;
    const { issueState, page } = this.state;

    const repoName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: issueState,
          per_page: 10,
          page,
        },
      }),
    ]);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });
  }

  loadIssues = async () => {
    const { match } = this.props;
    const { issueState, page } = this.state;
    const repoName = decodeURIComponent(match.params.repository);

    const [issues] = await Promise.all([
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: issueState,
          per_page: 10,
          page,
        },
      }),
    ]);

    this.setState({
      issues: issues.data,
    });
  };

  handleSelectChange = async event => {
    await this.setState({ issueState: event.target.value });
    this.loadIssues();
  };

  handleNextPage = async () => {
    const { page } = this.state;
    await this.setState({ page: page + 1 });
    this.loadIssues();
  };

  handlePreviousPage = async () => {
    const { page } = this.state;
    await this.setState({ page: page - 1 });
    this.loadIssues();
  };

  handleFirstPage = async () => {
    await this.setState({ page: 1 });
    this.loadIssues();
  };

  render() {
    const { repository, issues, loading, issueState, page } = this.state;

    if (loading) {
      return (
        <Loading loading={loading}>
          <FaSpinner size={36} />
        </Loading>
      );
    }

    return (
      <Container>
        <Owner>
          <Link to="/">⟵ Back to repositories</Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h4>{repository.owner.login}</h4>
          <h2>{repository.name}</h2>
          <p>{repository.description}</p>
          <RepoInfo>
            <span>Stars: {repository.stargazers_count}</span>
            <span>Forks: {repository.forks_count}</span>
          </RepoInfo>
          <h3>Issue state</h3>
        </Owner>

        <IssueState value={issueState} onChange={this.handleSelectChange}>
          <option value="all">All</option>
          <option value="open">Open</option>
          <option value="closed">Closed</option>
        </IssueState>

        <IssueList>
          {issues.map(issue => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <section>
                <strong>
                  <a
                    href={issue.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {issue.title}
                  </a>
                  {issue.labels.map(label => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </section>
            </li>
          ))}
        </IssueList>
        <PageNavigation>
          {page > 1 ? (
            <button type="button" onClick={this.handlePreviousPage}>
              Previous
            </button>
          ) : null}
          {page > 2 ? (
            <button type="button" onClick={this.handleFirstPage}>
              First page
            </button>
          ) : null}
          <button type="button" onClick={this.handleNextPage}>
            Next
          </button>
        </PageNavigation>
      </Container>
    );
  }
}

export default Repository;
