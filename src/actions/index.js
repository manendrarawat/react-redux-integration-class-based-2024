export default function selectUser(user){
    console.log('selectUser Action invoked : ')
    return {
        type : "SELECTED_USER",
        payload : user
    }
}