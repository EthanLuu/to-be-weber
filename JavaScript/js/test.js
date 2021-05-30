async function getUsers(names) {
  let jobs = []
  for (let name of names) {
    let response = fetch(`https://api.github.com/users/${name}`).then(
      async (response) => {
        const data = await response.json()
        if (response.ok) {
          return data
        } else {
          return null
        }
      }
    )
    jobs.push(response)
  }
  let res = await Promise.all(jobs)
  return res
}

async function test() {
  let users = await getUsers(['iliakan', 'remy', 'no.such.users'])
  console.log(users)
}
test()
