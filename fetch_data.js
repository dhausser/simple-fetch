"use strict";

function UserProfile(userData) {
  return React.createElement("pre", null, JSON.stringify(userData, null, 2));
}

function FetchData() {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((json) => {
        const { results } = json;
        const [firstUser] = results;
        setData(firstUser);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return "Loading...";
  }

  return React.createElement(UserProfile, data);
}

ReactDOM.render(
  React.createElement(FetchData),
  document.querySelector("#fetch_button_container")
);
