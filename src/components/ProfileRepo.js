import React from "react";
import { options } from "../config";
import { BiGitRepoForked, BiStar } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
class ProfileRepo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repoInfo: [],
    };
  }

  async componentDidMount() {
    const response = await fetch(
      `https://api.github.com/users/MayurKolhe/repos`,
      options
    );
    const data = await response.json();
    this.setState({
      repoInfo: data,
    });
  }

  render() {
    const { followers } = this.props;
    const [...repoList] = this.state.repoInfo;
    return (
      <div>
        {repoList
          .filter((repo) => repo.name === "Restuarant_Clone_App")
          .map((repo) => {
            return (
              <div key={repo.id}>
                <h1>
                  <a href={repo.html_url} target="_blank">
                    {repo.name}
                  </a>
                </h1>
                <h3 className="repo-des">{repo.description}</h3>
                <a href={repo.html_url} target="_blank">
                  <div className="profile-repo-items">
                    <h3>
                      <FiUsers />
                      <span>{followers} Followers</span>
                    </h3>
                    <h3>
                      <BiGitRepoForked />
                      <span>{repo.forks_count} Forks</span>
                    </h3>
                    <h3>
                      <BiStar />
                      <span>{repo.stargazers_count} Stars</span>
                    </h3>
                  </div>
                </a>
              </div>
            );
          })}
      </div>
    );
  }
}

export default ProfileRepo;
