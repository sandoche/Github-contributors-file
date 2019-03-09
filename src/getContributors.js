export default function getContributors(owner, repository, filePath) {
  return new Promise((resolve, reject) => {
    const url = `https://api.github.com/repos/${owner}/${repository}/commits?path=${filePath}`;
    fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      // const authorsLogin = [];
      const contributors = json.map((item) => {
        authorsLogin.push(item.author.login);
        // if (!authorsLogin.includes(item.author.login)) {
          return {
            login: item.author.login,
            avatar_url: item.author.avatar_url,
            url: item.author.html_url
          }
        // }
      });
      resolve(contributors);
    })
    .catch((e) => {
      reject(e)
    });
  })
}