// scroll header navbar
window.addEventListener("scroll", function(){
    var header = document.querySelector(".header-navbar");
    header.classList.toggle("scroll-js", window.scrollY > 150);

    var header = document.querySelector(".close");
    header.classList.toggle("open", window.scrollY > 150);

    var width = document.querySelector(".navbar_title");
    width.classList.toggle("navbar-width", window.scrollY > 150);
})

// slider
$(document).ready(function(){
    $('.slick-slider').slick({
        slidesToShow: 1,
        isFinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
        draggable: false,
        dots: true,
    });
});

// modal livebox
const imgs = document.querySelectorAll('.item-image')
const modalBody = document.querySelector('.modal-body')
const bodyWrap = document.querySelector('.body-wrap')
const wrspClose = document.querySelector('.wrap-close')
const body = document.querySelector('body')

imgs.forEach((item) => item.addEventListener("click", showhtml));
function showhtml(event) {
    var image = event.target.getAttribute("src");
    var template = `    <div class="modal">
    <div class="modal-body">
        <div class="body-wrap">
            <div class="wrap"></div>
            <div class="wrap-content">
                <div class="body-content" id="livebox-image">
                    <div class="content-information">
                        <div class="information-author">
                            <img src="https://images.pexels.com/users/avatars/230380428/till-daling-405.jpeg?auto=compress&fit=crop&h=50&w=50&dpr=1" 
                            alt="" class="img-avtauthor">
                            <ul>
                                Till Daling
                                <li>Theo dõi . Quyên góp</li>
                            </ul>
                        </div>
                        <div class="information-download">
                            <button class="collect">
                                <i class="fa-solid fa-bookmark"></i>
                                Sưu Tầm
                            </button>
                            <button class="like">
                                <i class="fa-solid fa-heart"></i>
                                Thích
                            </button>
                            <button class="download">
                                Tải xuống miễn phí
                                <i class="fa-solid fa-angle-down"></i>
                            </button>
                        </div>
                    </div>
                    <div class="content-img">
                        <img class="img-js" src="${image}" alt="">
                    </div>
                </div>
                <div class="wrap-directional">
                    <i class="wrap-left fa-solid fa-chevron-left"></i>
                    <i class="wrap-right fa-solid fa-chevron-right"></i>
                </div>
            </div>
        </div>
    </div>
    </div> `;
    document.body.insertAdjacentHTML("beforeend", template)
    body.classList.add('nooverflow')
}

let index = 0;
document.body.addEventListener("click", function(e) {
    const contentimg = document.querySelector('.img-js');
    let imgSRC = "";
    if (e.target.matches(".modal-body")) {
        e.target.parentNode.removeChild(e.target);
        body.classList.remove('nooverflow')
    } else if (e.target.matches(".wrap-right")) {
        imgSRC = contentimg.getAttribute("src");
        index = [...imgs].findIndex(
            (item) => item.getAttribute("src") === imgSRC
        );
        index = index + 1;
        if (index > imgs.length - 1) return;
        const newSRC = [...imgs][index].getAttribute("src");
        contentimg.setAttribute("src", newSRC);
    } else if (e.target.matches(".wrap-left")) {
        imgSRC = contentimg.getAttribute("src");
        index = [...imgs].findIndex(
            (item) => item.getAttribute("src") === imgSRC
        );
        index = index - 1;
        if (index < 0) return;
        const newSRC = [...imgs][index].getAttribute("src");
        contentimg.setAttribute("src", newSRC);
    }
})

// music

const $$ = document.querySelector.bind(document);

const nameSong = $$(".music-name");
const avtSong = $$(".music-avt");
const audio = $$("#song");
const playBtn = $$(".btn-toggle-play");
const prevBtn = $$(".btn-prev");
const nextBtn = $$(".btn-next");
const iconpause = $$(".icon-pause");
const iconplay = $$(".icon-play");
const randomBtn = $$(".btn-random");
const repeatBtn = $$(".btn-repeat");
const listPlay = $$(".music-list-item");

const app = {
    currentIndex: 0,
    isplaying: false,
    isRandom: false,
    isRepeat: false,
    songs: [
        {
            name: "Never Be Alone",
            singer: "TheFatRat",
            path: "./accsets/audio/Never Be Alone - TheFatRat.mp3",
            image: "https://i.pinimg.com/236x/ed/7c/79/ed7c796704a7e02cb36c284163755d64.jpg"
        },
        {
            name: "De Den De Di",
            singer: "Quang Hung MasterD",
            path: "./accsets/audio/De Den De Di - Quang Hung MasterD.mp3",
            image: "./accsets/img/img-avtmusic/quanghung.jpg"
        },
        {
            name: "Doan Tuyet Nang Di Remix Version",
            singer: "Phát Huy T4",
            path: "./accsets/audio/Doan Tuyet Nang Di Remix Version_ - Phat.mp3",
            image: "./accsets/img/img-avtmusic/t4.jpg"
        },
        {
            name: "Fly Away",
            singer: "TheFatRat_ Anjulie",
            path: "./accsets/audio/Fly Away - TheFatRat_ Anjulie.mp3",
            image: "https://i.pinimg.com/236x/50/be/03/50be03315e93a5ce7adc9a8ee9ae94f2.jpg"
        },
        {
            name: "Hai Phut Hon",
            singer: "Phao_ Wack",
            path: "./accsets/audio/Hai Phut Hon - Phao_ Wack.mp3",
            image: "./accsets/img/img-avtmusic/2phuthon.jpg"
        },
        {
            name: "1 con vịt",
            singer: "chiuj ",
            path: "./accsets/audio/O Trong Long Anh De Den De Di Ban Tieng.mp3",
            image: "./accsets/img/img-avtmusic/zoro.jpg"
        },
        {
            name: "Thunder",
            singer: "Gabry Ponte_ LUM_X",
            path: "./accsets/audio/Thunder - Gabry Ponte_ LUM_X Prezioso.mp3",
            image: "./accsets/img/img-avtmusic/thunder.jpg"
        },
        {
            name: "Yeu Ngay Lap Tuc I Like You_ Chinese",
            singer: "khong biet",
            path: "./accsets/audio/Yeu Ngay Lap Tuc I Like You_ Chinese Ver.mp3",
            image: "./accsets/img/img-avtmusic/zoro1.jpg"
        },
        {
            name: "Save Me",
            singer: "DEAMN",
            path: "./accsets/audio/Save Me - DEAMN.mp3",
            image: "https://i.pinimg.com/236x/ef/b2/da/efb2da3af16e4ffba994b30aa2b14638.jpg"
        },
        {
            name: "Sign",
            singer: "DEAMN",
            path: "./accsets/audio/Sign - DEAMN.mp3",
            image: "https://i.pinimg.com/236x/1e/c4/0a/1ec40acfb50fd3f987b796df2bb6fbc9.jpg"
        },
        {
            name: "Anh Nha O Dau The",
            singer: "AMee",
            path: "./accsets/audio/Anh Nha O Dau The_ - AMee.mp3",
            image: "./accsets/img/img-avtmusic/AMee.jpg"
        },
        {
            name: "Simple Love",
            singer: "Grey D_ Orange",
            path: "./accsets/audio/Simple Love - Grey D_ Orange.mp3",
            image: "https://i.pinimg.com/236x/33/52/d7/3352d7f681569d0e35d4f101ca43b81b.jpg"
        },
        {
            name: "Summertime",
            singer: "CinnamonsEveningCinema",
            path: "./accsets/audio/Summertime-CinnamonsEveningCinema-6046288.mp3",
            image: "https://i.pinimg.com/236x/fd/d8/9e/fdd89e52258da1a81313decd31d39f9a.jpg"
        },
        {
            name: "Faded",
            singer: "Alan Walker",
            path: "./accsets/audio/Faded - Alan Walker.mp3",
            image: "https://i.pinimg.com/236x/ce/2f/f2/ce2ff2f93cc7f5a81cd1f80bb23bce31.jpg"
        },
    ],
    render: function() {
        const htmls = this.songs.map((song, index) => {
            return `
            <div class="list-item-music ${index === this.currentIndex ? "activelistmusic" : ""}" data-index="${index}">
                <div class="name-avt-listmusic">
                    <img src="${song.image}" alt="" 
                    class="item-music-avt">
                    <ul>
                        ${song.name}
                        <li>${song.singer}</li>
                    </ul>
                </div>
                <div class="durationn">
                    <i class="fa-solid fa-ellipsis"></i>
                </div>
            </div> `
        }) 
        listPlay.innerHTML = htmls.join("")
    },
    defineProperties: function() {
        Object.defineProperty(this, "currentSong", {
            get: function() {
                return this.songs[this.currentIndex];
            }
        });
    },
    handleEvents: function () {
        const _this = this
        const cdThumbAnimate = avtSong.animate([{ transform: "rotate(360deg)" }], {
            duration: 10000, // 10 seconds
            iterations: Infinity
        });
        cdThumbAnimate.pause();
        playBtn.onclick = function() {
            if (!_this.isplaying) {
                audio.play();
                _this.oniconplay();
                cdThumbAnimate.play();
                _this.isplaying = true;
            } else if (_this.isplaying) {
                audio.pause();
                _this.oniconpause();
                cdThumbAnimate.pause();
                _this.isplaying = false;
            }
        }
        audio.ontimeupdate = function() {
            if (audio.duration) {
                const progressPercent = Math.floor(
                  (audio.currentTime / audio.duration) * 100
                );
                progress.value = progressPercent;
            }
        };
        progress.onchange = function (e) {
            const seekTime = (audio.duration / 100) * e.target.value;
            audio.currentTime = seekTime;
        };
        nextBtn.onclick = function () {
            if (_this.isRandom) {
                _this.playRandomSong();
            } else {
                _this.nextSong();
            }
            audio.play();
            cdThumbAnimate.play();
            _this.isplaying = true;
            _this.oniconplay();
            _this.render();
            _this.scrollToActiveSong();
        };
        prevBtn.onclick = function () {
            if (_this.isRandom) {
                _this.playRandomSong();
            } else {
                _this.prevSong();
            }
            audio.play();
            cdThumbAnimate.play();
            _this.isplaying = true;
            _this.oniconplay();
            _this.render();
            _this.scrollToActiveSong();
        };
        randomBtn.onclick = function () {
            _this.isRandom = !_this.isRandom;
            randomBtn.classList.toggle("active", _this.isRandom);
        };
        audio.onended = function () {
            if (_this.isRepeat) {
                audio.play();
            } else {
                nextBtn.click();
            }
        };
        repeatBtn.onclick = function (e) {
            _this.isRepeat = !_this.isRepeat;
            repeatBtn.classList.toggle("active", _this.isRepeat);
        };
        listPlay.onclick = function (e) {
            const songNode = e.target.closest(".list-item-music:not(.activelistmusic)");
            if (songNode || e.target.closest(".durationn")) {
                if (songNode) {
                    _this.currentIndex = Number(songNode.dataset.index);
                    _this.loadCurrentSong();
                    _this.render();
                    audio.play();
                    _this.oniconplay();
                    cdThumbAnimate.play();
                    _this.isplaying = true;
                }
                if (e.target.closest(".durationn")) {
                // chua co ys tuong
                }
            }
        };
    },
    scrollToActiveSong: function () {
        setTimeout(() => {
            $$(".list-item-music.activelistmusic").scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
        }, 300);
    },
    oniconplay: function () {
        iconpause.style.display = "block";
        iconplay.style.display = "none";
    },
    oniconpause: function () {
        iconpause.style.display = "none";
        iconplay.style.display = "block";
    },
    loadConfig: function () {
        this.isRandom = this.config.isRandom;
        this.isRepeat = this.config.isRepeat;
    },
    prevSong: function () {
        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1;
        }
        this.loadCurrentSong();
    },
    nextSong: function () {
        this.currentIndex++;
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0;
        }
        this.loadCurrentSong();
    },
    playRandomSong: function () {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * this.songs.length);
        } while (newIndex === this.currentIndex);   
        this.currentIndex = newIndex;
        this.loadCurrentSong();
    },
    loadCurrentSong: function() {
        nameSong.textContent = this.currentSong.name;
        avtSong.style.backgroundImage = `url('${this.currentSong.image}')`;
        audio.src = this.currentSong.path;
    },
    start: function() {
        // dinh nghia
        this.defineProperties();
        // event
        this.handleEvents();
        // tai tt song
        this.loadCurrentSong();
        this.render();
    }

}
app.start()

const closeMusicMB = $$(".close-music") 
const topicMusic = $$(".topic-music")
const modalMusic = $$(".modal-music")
const musicSpeed = $$(".music-speed")

closeMusicMB.addEventListener("click", function() {
    modalMusic.style.display = "none";
})
musicSpeed.addEventListener("click", openModalmusic)
topicMusic.addEventListener("click", openModalmusic)
function openModalmusic() {
    modalMusic.style.display = "block";
    body.classList.add('nooverflow');
}
document.body.addEventListener("click", function(e) {
    if (e.target.matches(".modal-music")) {
        body.classList.remove('nooverflow')
        modalMusic.style.display = "none";
    }
})

// show box-music
/*  */
const adclose = document.querySelector(".advertisement-close")
const advertisement = document.querySelector(".advertisement")
const advertisementIcon = document.querySelector(".advertisement-icon")

adclose.addEventListener("click", function() {
    advertisement.style.display = "none";
})
advertisementIcon.addEventListener("click", function() {
    advertisement.style.display = "block";
})
