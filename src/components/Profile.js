import React from "react";
import ProfileUser from "./ProfileUser";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "",
        bio: "",
      },
    };
  }

  async componentDidMount() {
    const response = await fetch(`https://api.github.com/users/MayurKolhe`, {
      method: "GET",
      headers: {
        Authorization: "",
      },
    });
    const json = await response.json();
    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    const { userInfo } = this.state;
    return (
      <div className="profile-class-container">
        <div className="profile-container">
          <h1 className="profile-title">About Me</h1>
          <ProfileUser data={userInfo} />
        </div>
        <div className="repo-container">
          <h1 className="repo-title">
            Food <span> Fire</span> App Repository
          </h1>
          {/* <ProfileRepo followers={userInfo.followers} /> */}
        </div>
      </div>
    );
  }
}

export default Profile;