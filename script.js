const datas = 
  [
    {
      url: "http://streaming.softnep.net:8037/;stream.nsv&type=mp3",
      name: "Capital FM"
    },
    {
      url: "http://streaming.softnep.net:8115/;stream.nsv&type=mp3",
      name: "Radio Sarangi Morang"
    },
    {
      url: "http://streaming.softnep.net:8091/;stream.nsv&type=mp3",
      name: "Radio Annapurna Nepal"
    },
    {
      url: "http://stream.zenolive.com/2w81t82wx3duv",
      name: "Radio Audio "
    },
    {
      url: "http://streaming.softnep.net:8139/;stream.nsv&type=mp3",
      name: "Radio Makwanpur Gorkha"
    },
    {
      url: "http://streaming.softnep.net:8141/;stream.nsv&type=mp3",
      name: "Radio Myagdi Kali"
    },
    {
      url: "http://streaming.softnep.net:8003/;stream.nsv&type=mp3",
      name: "Butwal FM"
    },
    {
      url: "http://streaming.softnep.net:8065/;stream.nsv&type=mp3",
      name: "Unique FM Rukum"
    },
    {
      url: "http://streaming.softnep.net:8103/;stream.nsv&type=mp3",
      name: "Afno FM Okhaldhunga"
    },
    {
      url: "http://streaming.softnep.net:8051/;stream.nsv&type=mp3",
      name: "Radio Melamchi"
    },
    {
      url: "http://streaming.softnep.net:8091/;stream.nsv&type=mp3",
      name: "Citizen FM",
      image: "http://radio.nepal.fm/wp-content/uploads/Citizen-FM.jpg"
    },
  ]


  const radioImg = document.querySelector('.radio__image');
  const channelName = document.querySelector('.radio__name');
  const prevBtn = document.querySelector('.play__previous');
  const nextBtn = document.querySelector('.play__next');
  const ctrlBtn = document.querySelector('#ctrlIcon');
  const player = document.querySelector('.radio_audio');
  const channelLength = datas.length;
  let index = 3; 
 

  const loadRadio = function(index) {
    radioImg.src = datas[index].image || "img.jpg";
    channelName.textContent = datas[index].name;
    player.src = datas[index].url;
    player.play();
    // player.muted = true;
  };

  // console.log(dataLength);
  loadRadio(index);

  prevBtn.addEventListener('click', () => {
    // console.log(index);
    if (index === 0){
      count = channelLength - 1;
    }
    else {
      index --;
      console.log(index)
    }

    loadRadio(index);

  });

  nextBtn.addEventListener('click', () => {
    if (index === channelLength - 1){
      index = 0;
    }
    else {
      index ++;
    }
    loadRadio(index);
  });

  ctrlBtn.addEventListener('click', () => {

    if(ctrlBtn.classList.contains('fa-pause')){
      player.pause();
      ctrlBtn.classList.remove('fa-pause');
      ctrlBtn.classList.add('fa-play');
    }
    else{
      ctrlBtn.classList.add('fa-pause');
      ctrlBtn.classList.remove('fa-play');
      player.play();
    }
  })










