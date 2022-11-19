const user = {
    name: "Kanlayanuch",
    nickname: "Kat",
    hobby: "sleep",
    address: "362/10 Muang Det",
    province: {
        province: "Ubon Ratchathani",
        postcode: 34160
    }
}

const myInfo = ({name,nickname, hobby, address, province:{province, postcode}}) => {
    return ` My nickname is ${nickname}, My hobby is ${hobby} and my postcode is ${postcode}`  
}
console.log(myInfo(user))
