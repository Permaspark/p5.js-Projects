/* My data self portrait will be based off of my top 50 played video games on Steam, and their sum of playtimes based on what genre they are. We'll use 6 genres: Action, Sandbox, Idle Game, Casual, RPG, and Multiplayer (mainly a misc option.)
1. Warframe - 3,138 hours RPG
2. Terraria - 2,316.8 hours Sandbox
3. The Elder Scrolls V: Skyrim - 372.2 hours RPG
4. Risk of Rain 2 - 356.5 hours Action
5. MONSTER HUNTER RISE - 251.7 hours RPG
6. Starbound - 246.3 hours Sandbox
7. Trove - 244.9 hours Multiplayer
8. Monster Hunter: World - 175.9 hours RPG
9. tModLoader - 149.3 hours Sandbox
10. Wallpaper Engine - 100.7 hours Idle Game
11. Monster Hunter Stories 2: Wings of Ruin - 84.3 hours RPG
12. Hollow Knight - 71 hours RPG
13. Sonic Adventure 2 - 62.2 hours Action
14. Persona 4 Golden - 61.1 hours RPG
15. ARK: Survival Evolved - 57.9 hours Sandbox
16. Don't Starve Together - 53 hours Multiplayer
17. The Elder Scrolls Online - 52.1 hours Multiplayer
18. Stardew Valley - 43.3 hours Casual
19. Persona 5 Strikers - 41.3 hours Action
20. Undertale - 39.2 hours RPG
21. Among Us - 35.9 hours Multiplayer
22. Quaver - 34.3 hours Multiplayer
23. Team Fortress 2 - 34.2 hours Multiplayer
24. Destiny 2 - 31.7 hours RPG
25. Halo: The Master Chief Collection - 31.6 hours Multiplayer
26. ASTRONEER - 30.8 hours Casual
27. AdVenture Capitalist - 27.9 hours Idle Game
28. Edge of Space - 26 hours Sandbox
29. Clicker Heroes - 25.8 hours Idle Game
30. Chill Corner - 24.1 hours Idle Game
31. Sonic Frontiers - 23.3 hours Action
32. DARK SOULS III - 23.3 hours RPG
33. Brawlhalla - 23.2 hours Multiplayer
34. Portal 2 - 22.8 hours RPG
35. My Singing Monsters - 21.5 hours Idle Game
36. Sonic Adventure DX - 21.5 hours Action
37. Deep Rock Galactic - 20.8 hours Multiplayer
38. Core Keeper - 20.5 hours Sandbox
39. Sonic Generations - 19.7 hours Action
40. Garry's Mod - 19 hours Sandbox
41. Leaf Blower Revolution - Idle Game - 15.8 hours Idle Game
42. Who's Your Daddy!? - 14.9 hours Multiplayer
43. Goat Simulator - 14.9 hours Casual
44. FTL: Faster Than Light - 13.4 hours Casual
45. Slime Rancher - 13.2 hours Casual
46. METAL GEAR RISING: REVENGEANCE - 12.6 hours RPG
47. Counter-Strike 2 - 12.5 hours Multiplayer
48. Broken Armor - 11.7 hours Action
49. Fallout 4 - 11.4 hours RPG
50. Doki Doki Literature Club - 10.7 hours Casual

Sum of Casual: 126.3 hours
Sum of RPG: 4,295.2 hours
Sum of Action: 536.2 hours
Sum of IG: 215.8 hours
Sum of Multiplayer: 557.4 hours
Sum of Sandbox:  2,835.8 hours

Total: 8,566.7 hours
*/

let data = [ 126.3,  215.8,  536.2,  557.4,  2835.8, 4295.2 ];
let labels = [ 'Casual', 'Idle Game', 'Action', 'Multiplayer', 'Sandbox', 'RPG' ];
let title = 'Time Played in Each Genre (in hours)';

let options = {
  
  type: 'bar',
  
  data: {
    labels: labels,
    datasets: [{
      
      backgroundColor: 'rgb(0,200,130)',
      borderColor:     'rgb(0,220,160)',
      borderWidth:     4,
      
      barPercentage: 1.0,
      
      data: data,
      label: 'Time Played (in hours)'
    }]
  },
  options: {
    title: {
      display: true,
      text: title
    },
    legend: {
      display: false
    }
  }
}

let chart = new Chart(document.getElementById('canvas'), options);

