import React from "react";
import ProfileRepo from "./ProfileRepo";

class ProfileUser extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    const { name, avatar_url, bio } = this.props.data;
    return (
      <div className="profile-user-card">
        <img src={avatar_url} alt={name} title={name} />
        <p className="profile-user-bio"> {bio} 👨🏻‍💻 </p>
        <ProfileRepo followers={this.props.data.followers} />
      </div>
    );
  }
}

export default ProfileUser;
