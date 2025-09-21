// script.js
document.addEventListener('DOMContentLoaded', () => {

  const apps = [{
      id: 'app1',
      title: 'သတင်းနှင့်ဇာတ်ကား',
      icon: 'https://i.ibb.co/NRB7DRs/IMG-20250907-105744.png',
      bgImageUrl: 'https://i.ibb.co/dstKxsX4/pexels-mccutcheon-1191710.jpg',
      category: 'Entertainment',
      purpose: 'သတင်း၊ ရုပ်ရှင်နှင့် ဗီဒီယိုများ ကြည့်ရှုရန်',
      download_link: 'https://www.mediafire.com/file/kz2cas0hpx4p2mz/%E1%80%9E%E1%80%90%E1%80%84%E1%80%BA%E1%80%B8%E1%80%94%E1%80%BE%E1%80%84%E1%80%BA%E1%80%B7%E1%80%87%E1%80%AC%E1%80%90%E1%80%BA%E1%80%80%E1%80%AC%E1%80%B8update.apk/file',
      type: 'nogame'
    }, {
      id: 'app2',
      title: 'Xvideo',
      icon: 'https://i.ibb.co/yFYd4rgz/photo-2025-09-17-18-24-51.jpg',
      category: 'myanmarxxn',
      purpose: 'all video',
      download_link: 'https://www.mediafire.com/file/wa3j36uolt9r8wx/AllKaBar.apk/file',
      type: 'nogame'
    }, {
      id: 'app4',
      title: 'မြန်မာဟင်းချက်နည်းများ',
      icon: 'https://i.ibb.co/YFQkwW8G/photo-2025-09-17-23-50-08.jpg',
      category: 'Food',
      purpose: 'မြန်မာအစားအစာ ချက်ပြုတ်နည်းပေါင်းစုံ',
      download_link: 'https://www.mediafire.com/file/gd0zxwuz1o58nuk/%25E1%2580%2599%25E1%2580%25BC%25E1%2580%2594%25E1%2580%25BA%25E1%2580%2599%25E1%2580%25AC%25E1%2580%259F%25E1%2580%2584%25E1%2580%25BA%25E1%2580%25B8%25E1%2580%2581%25E1%2580%25BB%25E1%2580%2580%25E1%2580%25BA%25E1%2580%2594%25E1%2580%258A%25E1%2580%25BA%25E1%2580%25B8.apk/file',
      type: 'nogame'
    }, {
      id: 'app5',
      title: 'WY AppStore',
      icon: 'https://i.ibb.co/PzxgMt7N/photo-2025-09-18-00-58-09.jpg',
      category: 'App',
      purpose: 'download',
      download_link: 'https://www.mediafire.com/file/n8ohx9xnfisynuw/WY_App_Store.apk/file',
      type: 'nogame'
    }, {
      id: 'app6',
      title: 'Sketchware pro',
      icon: 'https://i.ibb.co/YB24757s/photo-2025-09-18-07-49-55.jpg',
      category: 'create',
      purpose: 'App',
      download_link: 'https://www.mediafire.com/file/7pi9zf551xbgiy8/Sketchware_pro.apk/file',
      type: 'nogame'
    }, {
      id: 'app7',
      title: 'AIDE pro_2.8',
      icon: 'https://i.ibb.co/8CPMDm7/photo-2025-09-18-07-50-07.jpg',
      category: 'create',
      purpose: 'App',
      download_link: 'https://www.mediafire.com/file/rh85g28nbmnur3f/AIDE_Pro_2.8.7-freely.apk/file',
      type: 'nogame'
    }, {
      id: 'app8',
      title: 'AIDE_3.2',
      icon: 'https://i.ibb.co/cXQ8Xv7Q/photo-2025-09-18-07-50-00.jpg',
      category: 'create',
      purpose: 'App',
      download_link: 'https://www.mediafire.com/file/50xmjvul6rn6mwq/AIDE_3.2.191010-2.3.5.apk/file',
      type: 'nogame'
    }, {
      id: 'app9',
      title: 'AIDE studio pro',
      icon: 'https://i.ibb.co/Hkc3XGd/photo-2025-09-18-07-50-13.jpg',
      category: 'create',
      purpose: 'App',
      download_link: 'https://www.mediafire.com/file/o9mew8gh9e4r3g5/Aide_studio_pro.apk/file',
      type: 'nogame'
    }, {
      id: 'app10',
      title: 'Developer Color Tool',
      icon: 'https://i.ibb.co/HD9Fx72P/photo-2025-09-18-09-44-54.jpg',
      category: 'create color',
      purpose: 'App',
      download_link: 'https://www.mediafire.com/file/oqy8bv69x90hk71/Developer_Color_Tool_1.2.apk/file',
      type: 'nogame'
    }, {
      id: 'app11',
      title: 'Material Icon Maker',
      icon: 'https://i.ibb.co/5WDs2Pgp/photo-2025-09-18-09-44-43.jpg',
      category: 'create icon',
      purpose: 'App',
      download_link: 'https://www.mediafire.com/file/lt8hgmua19ua4ij/Material_Icon_Maker.apk/file',
      type: 'nogame'
    }, {
      id: 'app12',
      title: 'AndroidExample',
      icon: 'https://i.ibb.co/nMq2ND9J/photo-2025-09-18-09-44-48.jpg',
      category: 'create',
      purpose: 'App',
      download_link: 'https://www.mediafire.com/file/w91gd7bp80mpdyh/AndroidExample_1.1.apk/file',
      type: 'nogame'
    }, {
      id: 'app13',
      title: 'Download Video No Watermark',
      icon: 'https://i.ibb.co/tTrfrTT2/photo-2025-09-18-10-04-51.jpg',
      category: 'modversion',
      purpose: 'App',
      download_link: 'https://www.mediafire.com/file/jcj5q0w5s4t6p3r/AhaTik_Downloader_Premium_v1.52.3_Modded_by_%2540Getmodpcs.apk/file',
      type: 'nogame'
    }, {
      id: 'app14',
      title: 'Ai Video Generator',
      icon: 'https://i.ibb.co/PZsPMHMX/photo-2025-09-18-10-22-02.jpg',
      category: 'modversion',
      purpose: 'App',
      download_link: 'https://www.mediafire.com/file/nz7f0gdfjhat5vm/Ai_Video_Generator.apk/file',
      type: 'edit'
    }, {
      id: 'app15',
      title: 'ADV Screen Recorder',
      icon: 'https://i.ibb.co/G42Pv4Sn/photo-2025-09-18-11-22-56.jpg',
      category: 'modversion',
      purpose: 'App',
      download_link: 'https://www.mediafire.com/file/blsc8tudn5nmp7z/ADV_Screen_Recorder_Pro_v4.25.0_Modded_by_%2540Getmodpcs.apk/file',
      type: 'nogame'
    }, {
      id: 'app16',
      title: 'IMDB Movies and TV Shows',
      icon: 'https://i.ibb.co/206dWSK6/photo-2025-09-18-11-23-21.jpg',
      category: 'modversion',
      purpose: 'App',
      download_link: 'https://www.mediafire.com/file/iehjn9emmv2pa2l/IMDb_Premium_v9.3.2.160259480_Modded_by_%2540Getmodpcs.apk/file',
      type: 'nogame'
    }, {
      id: 'app17',
      title: 'InShot Video Editor',
      icon: 'https://i.ibb.co/PzDdC4qT/photo-2025-09-18-11-23-14.jpg',
      category: 'modversion',
      purpose: 'App',
      download_link: 'https://www.mediafire.com/file/c2fy4cqbjozpju1/InShot_Pro_v2.653.1753_Modded_by_%2540Getmodpcs.apk/file',
      type: 'edit'
    }, {
      id: 'app18',
      title: 'MoviesHub',
      icon: 'https://i.ibb.co/1G1CxCvL/photo-2025-09-18-11-23-30.jpg',
      category: 'modversion',
      purpose: 'App',
      download_link: 'https://www.mediafire.com/file/sek461p93u6xi9n/MOVIES_HUB_PREMIUM_v2.3.8d_Modded_by_%2540Getmodpcs.apk/file',
      type: 'nogame'
    }, {
      id: 'app19',
      title: 'live Flight Tracker',
      icon: 'https://i.ibb.co/gbwHMvvg/photo-2025-09-18-11-23-01.jpg',
      category: 'modversion',
      purpose: 'App',
      download_link: 'https://www.mediafire.com/file/qn1g8vmh5e6tisf/FLYMAT_PREMIUM_v1.0.75_Modded_by_%2540Getmodpcs.apk/file',
      type: 'nogame'
    }, {
      id: 'app20',
      title: 'Device Info',
      icon: 'https://i.ibb.co/RGYfr6pp/photo-2025-09-18-12-29-58.jpg',
      category: 'modversion',
      purpose: 'App',
      download_link: 'https://www.mediafire.com/file/yklcspohofralls/DevInfo_Pro_v3.4.0.1_Modded_by_%2540Getmodpcs.apk/file',
      type: 'nogame'
    }, {
      id: 'app21',
      title: 'EasynotesVIP',
      icon: 'https://i.ibb.co/yFNFPzbK/photo-2025-09-18-12-29-54.jpg',
      category: 'modversion',
      purpose: 'App',
      download_link: 'https://www.mediafire.com/file/8xajn27cr1pyjuo/EasyNotes_VIP_v1.4.25.0934_Modded_by_%2540Getmodpcs.apk/file',
      type: 'nogame'
    }, {
      id: 'app22',
      title: 'XScreen Recorder',
      icon: 'https://i.ibb.co/SwFH8pzQ/photo-2025-09-18-12-29-50.jpg',
      category: 'modversion',
      purpose: 'App',
      download_link: 'https://www.mediafire.com/file/wswbqltg5zg9z6h/XRecorder_Pro_v2.8.7.5_Modded_by_%2540Getmodpcs.apk/file',
      type: 'edit'
    }, {
      id: 'app23',
      title: 'Spotify',
      icon: 'https://i.ibb.co/rGbTYp1X/photo-2025-09-18-12-29-43.jpg',
      category: 'modversion',
      purpose: 'App',
      download_link: 'https://www.mediafire.com/file/kupqrawnhbko3iy/Spotify_Premium_v9.0.84.92_Modded_by_%2540Getmodpcs.apk/file',
      type: 'nogame'
    }, {
      id: 'app24',
      title: 'Uni TV Remote',
      icon: 'https://i.ibb.co/jkBgGnqz/photo-2025-09-18-12-29-29.jpg',
      category: 'modversion',
      purpose: 'App',
      download_link: 'https://www.mediafire.com/file/p6o8y0jelamh1pe/UniMote_Premium_v1.8.4_Modded_by_%2540Getmodpcs.apk/file',
      type: 'nogame'
    }, {
      id: 'app25',
      title: 'PowerDirector-VideoEditor',
      icon: 'https://i.ibb.co/sdJf6N0S/photo-2025-09-18-12-29-34.jpg',
      category: 'modversion',
      purpose: 'App',
      download_link: 'https://www.mediafire.com/file/n34kwclc3vnlx4t/PowerDirector_Premium_v15.9.0_Modded_by_%2540Getmodpcs.apk/file',
      type: 'edit'
    }, {
      id: 'app26',
      title: 'Ai Photo Editor-Dofoto',
      icon: 'https://i.ibb.co/1fgRyS4j/photo-2025-09-18-12-29-24.jpg',
      category: 'modversion',
      purpose: 'App',
      download_link: 'https://www.mediafire.com/file/c7la3ud63elknm2/DoFoto_AI_Photo_Editor_v1.285.89_Modded_by_%2540Getmodpcs.apk/file',
      type: 'edit'
    }, {
      id: 'app27',
      title: 'ShotCut Ai',
      icon: 'https://i.ibb.co/V0qtzQRg/photo-2025-09-18-12-29-17.jpg',
      category: 'modversion',
      purpose: 'App',
      download_link: 'https://www.mediafire.com/file/ltes3y3qyt7o947/ShotCut_Premium_v3.12.0_Modded_by_%2540Getmodpcs.apk/file',
      type: 'edit'
    }, {
      id: 'app28',
      title: 'Vidma Ai-VideoEditor',
      icon: 'https://i.ibb.co/4R8mRsKP/photo-2025-09-18-12-29-38.jpg',
      category: 'modversion',
      purpose: 'App',
      download_link: 'https://www.mediafire.com/file/t7l0exm7p4is8xw/Vidma_Premium_v2.40.0_Modded_by_%2540Getmodpcs.apk/file',
      type: 'edit'
    }, {
      id: 'app29',
      title: 'CapCut pro freeversion',
      icon: 'https://getmodsapk.com/storage/CapCut%20%20MOD%20APK7.webp',
      category: 'modversion',
      purpose: 'အကုန်လုံးfreeသုံးပါ',
      download_link: 'https://getmodsapk.com/dl-track/capcut-pro-free-mod-apk/203326',
      type: 'edit'
    }, {
      id: 'app30',
      title: 'Spring Video Editor',
      icon: 'https://i.ibb.co/qMZXnKhQ/photo-2025-09-18-15-12-57.jpg',
      category: 'modversion',
      purpose: 'App',
      download_link: 'https://www.mediafire.com/file/e5w16wh5rodi0xi/Spring_Premium_v1.4.3.3537_Modded_by_%2540Getmodpcs.apk/file',
      type: 'edit'
    }, {
      id: 'app31',
      title: 'KingMaster',
      icon: 'https://i.ibb.co/xPVJQ98/photo-2025-09-18-15-12-52.jpg',
      category: 'modversion',
      purpose: 'App',
      download_link: 'https://www.mediafire.com/file/9cghockewg7efoq/KineMaster_Premium_v7.8.5.3542.GP_Modded_by_%2540Getmodpcs.apk/file',
      type: 'edit'
    }, {
      id: 'app32',
      title: 'AllVideoDownloader',
      icon: 'https://i.ibb.co/C5HfBgMq/photo-2025-09-18-15-12-48.jpg',
      category: 'modversion',
      purpose: 'App',
      download_link: 'https://www.mediafire.com/file/ebteevjdthbzzsj/All_Video_Downloader_v1.7.2_Modded_by_%2540Getmodpcs.apk/file',
      type: 'nogame'
    }, {
      id: 'app33',
      title: 'Cartoon PhotoEditor',
      icon: 'https://i.ibb.co/bMTdQ393/photo-2025-09-18-15-12-26.jpg',
      category: 'modversion',
      purpose: 'App',
      download_link: 'https://www.mediafire.com/file/6mjxwm5ie5wka3o/ToonTap_Pro_v1.50.89_Modded_by_%2540Getmodpcs.apk/file',
      type: 'edit'
    }, {
      id: 'app34',
      title: 'BesoccerPremium',
      icon: 'https://i.ibb.co/xtDd5G97/photo-2025-09-18-15-12-31.jpg',
      category: 'modversion',
      purpose: 'App',
      download_link: 'https://www.mediafire.com/file/5w8cx2u7xybw0uf/BeSoccer_Premium_v5.8.0_Modded_by_%2540Getmodpcs.apk/file',
      type: 'nogame'
    }, {
      id: 'app35',
      title: 'TurboVPN Premium',
      icon: 'https://i.ibb.co/ycfbQwfn/photo-2025-09-18-15-12-39.jpg',
      category: 'modversion',
      purpose: 'App',
      download_link: 'https://www.mediafire.com/file/gtltcs1mzki5c91/Turbo_VPN_Premium_v4.3.1.8_Modded_by_%2540Getmodpcs.apk/file',
      type: 'nogame'
    }, {
      id: 'app36',
      title: 'PicsartPremium ',
      icon: 'https://i.ibb.co/mrVk51Y5/photo-2025-09-18-15-12-22.jpg',
      category: 'modversion',
      purpose: 'App',
      download_link: 'https://www.mediafire.com/file/ri34hjh84h7456p/Picsart_Premium_Gold_v29.3.2_Modded_by_%2540Getmodpcs.apk/file',
      type: 'edit'
    }, {
      id: 'app37',
      title: 'Ai Chat Assistant',
      icon: 'https://i.ibb.co/hFvZrwB2/photo-2025-09-18-15-12-17.jpg',
      category: 'modversion',
      purpose: 'App',
      download_link: 'https://www.mediafire.com/file/51vqzemcoexyl6y/Chat_Smith_Premium_v8.251105.8_Modded_by_%2540Getmodpcs.apk/file',
      type: 'nogame'
    }, {
      id: 'app38',
      title: 'Canva',
      icon: 'https://i.ibb.co/PZ1GSxbs/download.jpg',
      category: 'modversion',
      purpose: 'App',
      download_link: 'https://www.mediafire.com/file/ngbm1qfsyge6fuh/Canva_v2.206.0_MOD.apk/file',
      type: 'edit'
    }, {
      id: 'app39',
      title: 'IPTV Pro',
      icon: 'https://i.ibb.co/ccrFcJC4/photo-2025-09-19-01-12-11.jpg',
      category: 'modversion',
      purpose: 'App',
      download_link: 'https://www.mediafire.com/file/anytgh5kaianout/IPTV_Pro_v9.3.5_Modded_by_%2540Getmodpcs.apk/file',
      type: 'nogame'
    }, {
      id: 'app40',
      title: 'My Movie Premium',
      icon: 'https://i.ibb.co/99mb8yc5/photo-2025-09-19-01-12-06.jpg',
      category: 'modversion',
      purpose: 'App',
      download_link: 'https://www.mediafire.com/file/l2p55wzq028j6nk/MyMovie_Premium_v14.13.5_Modded_by_%2540Getmodpcs.apk/file',
      type: 'nogame'
    }, {
      id: 'app41',
      title: 'Telegram Premium',
      icon: 'https://i.ibb.co/fd0r9r0j/photo-2025-09-19-01-11-43.jpg',
      category: 'modversion',
      purpose: 'App',
      download_link: 'https://www.mediafire.com/file/7ipy7brs863eywr/Telegram_Premium_v12.2.0_Modded_by_%2540Getmodpcs.apk/file',
      type: 'nogame'
    }, {
      id: 'app42',
      title: 'VideoShowVIP',
      icon: 'https://i.ibb.co/VXmztTY/photo-2025-09-19-01-11-55.jpg',
      category: 'modversion',
      purpose: 'App',
      download_link: 'https://www.mediafire.com/file/psh22x5opjxwo1h/VideoShow_VIP_v11.7.1.0_Modded_by_%2540Getmodpcs.apk/file',
      type: 'edit'
    }, {
      id: 'app43',
      title: 'AutoClicker',
      icon: 'https://i.ibb.co/vCxVzcqL/photo-2025-09-19-01-12-01.jpg',
      category: 'modversion',
      purpose: 'App',
      download_link: 'https://www.mediafire.com/file/nru2908tnni49s9/Auto_Clicker_Pro_v2.6.0_Modded_by_%2540Getmodpcs.apk/file',
      type: 'nogame'
    }, {
      id: 'app44',
      title: 'Chatgpt Premium',
      icon: 'https://i.ibb.co/Sw6ctmTM/download.png',
      category: 'modversion',
      purpose: 'App',
      download_link: 'https://www.mediafire.com/file/uuzy14nlgqnc4pf/Ai-Chatbot-v5.2.0.2-MOD-OTR-%2528Getmodsapk.com%2529.apk/file',
      type: 'nogame'
    }, {
      id: 'app45',
      title: 'TeraBox Cloud Storage',
      icon: 'https://i.ibb.co/mrNs6MTk/photo-2025-09-19-01-42-56.jpg',
      category: 'modversion',
      purpose: 'App',
      download_link: 'https://files.modyolo.com/Terabox/TeraBox_%20v4.5.3%20_MOD.apk',
      type: 'nogame'
    }, {
      id: 'app46',
      title: 'Alight Motion',
      icon: 'https://play-lh.googleusercontent.com/OU0BlP8C9-V7ECl2crma7B48nzDbK7liSLjn0j_fpTlyWG6qyEE-mw_KFZ9aOXF0a3w=w100-h100-rw',
      category: 'modversion',
      purpose: 'App',
      download_link: 'https://file.apkdone.io/s/a8cFKqR8eGLmgew/download',
      type: 'edit'
    }, {
      id: 'app47',
      title: 'Tiktok Mod',
      icon: 'https://modyolo.com/wp-content/uploads/2021/09/tiktok-150x150.jpg',
      category: 'modversion',
      purpose: 'App',
      download_link: 'https://files.modyolo.com/TikTok/TikTok%20v41.7.16%20MOD.apk',
      type: 'nogame'
    }, {
      id: 'app48',
      title: 'Netflix',
      icon: 'https://getmodsapk.com/storage/NETFLIX-MOD-APK2.webp',
      category: 'modversion',
      purpose: 'App',
      download_link: 'https://getmodsapk.com/dl-track/9458-netflix-modded-apk/208982',
      type: 'nogame'
    }, {
      id: 'app49',
      title: 'Tennis Clash v6.18.2 MOD APK',
      icon: 'https://getmodsapk.com/storage/media/2025/5/tennis-clash-mod-apk-1-1.webp',
      category: 'modversion',
      purpose: 'Unlimited Coins/Gems',
      download_link: 'https://getmodsapk.com/dl-track/tennis-clash-3d-modded-apk/209666',
      type: 'game'
    }, {
      id: 'app50',
      title: 'Cat Runner v5.4.4',
      icon: 'https://getmodsapk.com/storage/Cat-Runner-MOD-APK%20(2)1.webp',
      category: 'modversion',
      purpose: 'Unlimited Money/Gems',
      download_link: 'https://getmodsapk.com/dl-track/cat-runner-mod-apk/212522',
      type: 'game'
    }, {
      id: 'app51',
      title: 'Hot Slide v2.3.90',
      icon: 'https://getmodsapk.com/storage/media/2025/9/hot-slide-mod-apk.webp',
      category: 'modversion',
      purpose: 'Unlimited Money/Unlocked',
      download_link: 'https://getmodsapk.com/dl-track/hot-slide-mod-apk/210984',
      type: 'game'
    }, {
      id: 'app52',
      title: 'CarX Highway Racing',
      icon: 'https://getmodsapk.com/storage/CarX%20Highway%20Racing%20MOD%20APK%20(1)0.webp',
      category: 'modversion',
      purpose: 'Unlimited Money/VIP Unlocked',
      download_link: 'https://getmodsapk.com/dl-track/carx-highway-racing-apk-mod/211881',
      type: 'game'
    }, {
      id: 'app53',
      title: 'Invasion: Aerial Warfare',
      icon: 'https://getmodsapk.com/storage/Invasion%20Modern%20Empire%20MOD%20APK4.webp',
      category: 'modversion',
      purpose: 'Unlimited Money/Energy',
      download_link: 'https://getmodsapk.com/dl-track/invasion-modern-empire-mod-apk/210877',
      type: 'game'
    }, {
      id: 'app54',
      title: 'Tacticool',
      icon: 'https://getmodsapk.com/storage/Tacticool%20MOD%20APK%20(1)3.webp',
      category: 'modversion',
      purpose: 'Mod Menu/Unlimited Money',
      download_link: 'https://getmodsapk.com/dl-track/tacticool-mod-apk/210869',
      type: 'game'
    },
               {
      id: 'app55',
      title: 'MyanmarNet',
      icon: 'https://i.ibb.co/vCKbgpTQ/photo-2025-09-10-14-24-45.jpg',
      category: 'modversion',
      purpose: 'app',
      download_link: '',
      type: 'game'
    },
               ];
  
  // --- DOM Elements ---
  const appsGrid = document.getElementById('appsGrid');
  const searchInput = document.getElementById('searchInput');
  const tabButtons = document.querySelectorAll('.tab-btn');

  // --- Core Functions ---
  function renderApps(applist) {
    appsGrid.innerHTML = '';
    if (applist.length === 0) {
      appsGrid.innerHTML = `<p style="grid-column: 1 / -1; text-align: center; color: var(--muted);">No apps found.</p>`;
      return;
    }
    applist.forEach(app => {
      const card = document.createElement('article');
      card.className = 'card';
      card.innerHTML = `
        <div class="icon"><img src="${app.icon}" alt="${app.title} icon" loading="lazy" /></div>
        <div class="meta">
          <h3 class="app-title">${app.title}</h3>
          <small>Category: <strong>${app.category}</strong></small>
          <div class="desc">${app.purpose}</div>
        </div>
        <div class="actions">
          <a href="${app.download_link}" class="btn small">Download</a>
        </div>
      `;
      appsGrid.appendChild(card);
    });
  }

  function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    let filteredApps = apps;

    const activeTab = document.querySelector('.tab-btn.active').dataset.filter;
    if (activeTab === 'games') {
      filteredApps = apps.filter(app => app.type === 'game');
    } else if (activeTab === 'nogames') {
      filteredApps = apps.filter(app => app.type === 'nogame');
    } else if (activeTab === 'edit') {
      filteredApps = apps.filter(app => app.type === 'edit');
    }

    if (searchTerm) {
      filteredApps = filteredApps.filter(app =>
        app.title.toLowerCase().includes(searchTerm) ||
        app.purpose.toLowerCase().includes(searchTerm) ||
        app.category.toLowerCase().includes(searchTerm)
      );
    }

    renderApps(filteredApps);
  }

  function handleTabClick(event) {
    tabButtons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    handleSearch();
  }

  // --- Initial Setup ---
  searchInput.addEventListener('input', handleSearch);
  tabButtons.forEach(button => button.addEventListener('click', handleTabClick));
  renderApps(apps);
});
