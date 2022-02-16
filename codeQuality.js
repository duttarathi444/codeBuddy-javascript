// level {2}

const getUser = async () => {
    return await new Promise((resolve, reject) => {
        resolve('User');
    })
}

const getProfile = async () => {
    return await new Promise((resolve, reject) => {
        resolve('Profile');
    })
}

const getPosts = async () => {
    return await new Promise((resolve, reject) => {
        resolve('Posts');
    })
}

const getUsers = async () => {
    let doc = await Promise.all([getUser(), getProfile(), getPosts()]).then(res => {
        return {
            user: res[0],
            profile: res[1],
            posts: res[2]
        };
    });
    return doc;
}

getUsers().then(res => {
    console.log(res);
})