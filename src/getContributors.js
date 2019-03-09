export default function getContributors(owner, repository, filePath) {
  return new Promise((resolve, reject) => {
    const url = `https://api.github.com/repos/${owner}/${repository}/commits?path=${filePath}`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        const authorsLogin = [];

        const contributors = json.map((item) => {
          let result = null;

          /* eslint-disable */
          if (!authorsLogin.includes(item.author.login)) {
            result = {
              login: item.author.login,
              avatar_url: item.author.avatar_url,
              url: item.author.html_url
            };
          }
          /* eslint-enable */

          authorsLogin.push(item.author.login);
          return result;
        }).filter(item => {
          return item != null;
        });

        resolve(contributors);
      })
      .catch((e) => {
        reject(e);
      });
  });
}
