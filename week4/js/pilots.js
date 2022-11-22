var pilots = [
    {
      id: 2,
      name: "Wedge Antilles",
      faction: "Rebels",
    },
    {
      id: 8,
      name: "Ciena Ree",
      faction: "Empire",
    },
    {
      id: 40,
      name: "Iden Versio",
      faction: "Empire",
    },
    {
      id: 66,
      name: "Thane Kyrell",
      faction: "Rebels",
    }
  ];

  let faction = [];
  for(let i=0; i < pilots.length; i++) {

    let currentPilot = pilots[i];
    console.log(`${currentPilot.faction}`)

    if (currentPilot.faction == 'Rebels') {
      faction.push(currentPilot);
    };
  }

  for (const currentPilot of pilots) {

    if (currentPilot.faction == 'Rebels') {
      faction.push(currentPilot);
    };

  }
// FAt arrow function
  const rebelPilots = pilots.filter(currentPilot => (currentPilot) { currentPilot.faction=='Rebels' } )