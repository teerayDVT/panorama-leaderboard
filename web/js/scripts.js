// // window.addEventListener('DOMContentLoaded', () => {
// //     getLeaderboardData();
// // })

// let teams;

// async function getLeaderboardData() {
//     teams = await fetch("http://localhost:5000/leaderboard", {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         }
//     }).then(res => {
//         return res.json();
//     }).then(data => {
//         return data;
//     });
//     console.log(teams);
// }

// export function getTeams() {
//     return teams;
// }

// // getLeaderboardData();