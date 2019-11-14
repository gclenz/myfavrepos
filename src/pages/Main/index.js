import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { FaSpinner } from 'react-icons/fa';

import api from '../../services/api';

import Container from '../../components/Container';
import { Form, SubmitButton, List } from './styles';

class Main extends Component {
  state = {
    newRepo: '',
    repositories: [],
    loading: false,
    error: null,
  };

  // Load data from localStorage
  componentDidMount() {
    const repositories = localStorage.getItem('repositories');

    if (repositories) {
      this.setState({ repositories: JSON.parse(repositories) });
    }
  }

  // Store data into localStorage
  componentDidUpdate(_, prevState) {
    const { repositories } = this.state;

    if (prevState.repositories !== repositories) {
      localStorage.setItem('repositories', JSON.stringify(repositories));
    }
  }

  handleInputChange = e => {
    this.setState({ newRepo: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    this.setState({
      loading: true,
      error: false,
    });

    try {
      const { newRepo, repositories } = this.state;

      // Check if typed something
      if (newRepo === '') {
        throw new Error('You need to type something.');
      }

      const checkIfRepoExists = repositories.find(
        repo => repo.name === newRepo
      );

      if (checkIfRepoExists) {
        throw new Error('Duplicated repository.');
      }

      const response = await api.get(`/repos/${newRepo}`);

      const data = {
        name: response.data.full_name,
      };

      this.setState({
        repositories: [...repositories, data],
        newRepo: '',
        loading: false,
      });
    } catch (err) {
      alert(err);
      this.setState({
        error: true,
      });
    }

    this.setState({
      loading: false,
    });
  };

  handleDelete(repoName) {
    const { repositories } = this.state;

    this.setState({
      repositories: repositories.filter(repo => repo.name !== repoName),
    });
  }

  render() {
    const { newRepo, repositories, loading, error } = this.state;

    return (
      <Container>
        <h1>Repositories</h1>

        <Form onSubmit={this.handleSubmit} error={error}>
          <input
            type="text"
            placeholder="Type a repository [owner/repository]"
            value={newRepo}
            onChange={this.handleInputChange}
          />
          <SubmitButton loading={loading}>
            {loading ? <FaSpinner size={16} /> : 'Add!'}
          </SubmitButton>
        </Form>
        <List>
          {repositories.map(repository => (
            <li key={repository.name}>
              <span>{repository.name}</span>
              <section>
                <Link to={`/repository/${encodeURIComponent(repository.name)}`}>
                  Details
                </Link>
                <button
                  type="button"
                  onClick={() => this.handleDelete(repository.name)}
                >
                  ×
                </button>
              </section>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}

export default Main;
