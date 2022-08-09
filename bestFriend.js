//  bestFriend
function bestFriend(friendNames) {
    let bigName =[0];
    for (let i = 0; i < friendNames.length; i++){
        let friends = friendNames[i];
        if (bigName.length < friends.length) {
            bigName = friends;
        }
    }
    return bigName;
}
const friendNames = ['chintu', 'mintu', 'diltu', 'fontu sardar', 'laltu sorder shaltu'];
const myBestFriend = bestFriend(friendNames);
console.log(myBestFriend);
