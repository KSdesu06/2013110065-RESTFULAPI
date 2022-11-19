const user = [
    {name: "Kanlayanuch",
    nickname: "Kat",
    hobby: "sleep",
    address: "362/10 Muang Det",
    province: {
        province: "Ubon Ratchathani",
        postcode: 34160}
    },
    {name: "Chawaphon",
    nickname: "Nat",
    hobby: "Reading books",
    address: "10/10 Muang Det",
    province: {
        province: "Ubon Ratchathani",
        postcode: 34160}
    },
    {name: "Kanyayon",
    nickname: "Pop",
    hobby: "Playing games",
    address: "80/3 Muang Det",
    province: {
        province: "Ubon Ratchathani",
        postcode: 34160}
    }
]

const myInfo = ({name,nickname, hobby, address, province:{province, postcode}}) => {
    return ` My nickname is ${nickname}, My hobby is ${hobby} and my postcode is ${postcode}`  
}
for (const u of user){
    console.log(myInfo(u))
}