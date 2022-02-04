exports.limitcount = (prem, limitCounts) => {
	return`
*「 LIMIT COUNT 」*
Sisa limit : ${prem ? '1000' : `${limitCounts}`}
`
}
exports.limitend = (pushname) => {
	return`Maaf ${pushname} limit hari ini telah habis\nlimit di reset setiap jam :00:00`
}
exports.noregis = (pushname) =>{
	return`Halo ${pushname} lu belum daftar. Ketik .daftar dulu`
	}
exports.regis = () =>{
	return` Lu udah terdaftar 😒`
	}
exports.daftar = (sender, pushname, time, serialUser, totalUser) =>{
	return` *「 PENDAFTARAN BERHASIL 」*

あ Nama : ${pushname}
あ Nomor : ${sender.split("@")[0]}
あ Waktu : ${time}
あ Serial : ${serialUser}
あ Total User : ${totalUser.length}

Thanks yak udah daftar, sekarang ketik .menu untuk melihat 
fitur bot.
`
	}
exports.owner = (botname) =>{
	return`Command khusus owner ${botname}`
	}
exports.admin = (groupName) =>{
	return`Command khusus admin ${groupName}`
	}
exports.adminB = () =>{
	return`Bot bukan admin grup`
	}
exports.err = () =>{
	return`Fitur ini sedang eror !`
	}
exports.group = () =>{
	return`Command khusus di dalam group`
	}

exports.wait = () =>{
	return`_Sedang di proses..._`
	}
exports.ok = () =>{
	return` ✅ _Oke done..._`
	}
exports.welcome = () =>{
	return`Jangan Lupa Intro Ya~
⌯ָ   ֙Nama :
⌯ָ   ֙Umur :
⌯ָ   ֙Kelamin :
⌯ָ   ֙Askot :
╰─ ᝬ _Patuhi Rules Group Ya_  >_<`
      }
exports.leave = () =>{
	return`
│
╰─ ᝬ _Balik Lagi Wajib Donasi Ya_ >_<`
}
exports.menu = (prefix, salam, pushname) =>{
	return`Hai Kak ${pushname}, Selamat ${salam}

╭───❒ *「 MAIN 」* 
│ あ ${prefix}menu
│ あ ${prefix}help
│ あ ${prefix}haruka
│
├─❒ *「 MENU DOWNLOAD 」*
│ あ ${prefix}play <query>
│ あ ${prefix}song <judul lagu>
│ あ ${prefix}pinterest <query>
│ あ ${prefix}ytmp3 <url>
│ あ ${prefix}ytmp4 <url>
│ あ ${prefix}tiktok <url>
│ あ ${prefix}tiktoknowm <url>
│ あ ${prefix}tiktokwm <url>
│ あ ${prefix}tiktokaudio <url>
│ あ ${prefix}soundcloud <url>
│ あ ${prefix}telesticker <url>
│
├─❒ *「 MENU CONVERT 」*
│ あ ${prefix}stiker <video/image>
│ あ ${prefix}semoji 😎
│ あ ${prefix}smeme <text>
│ あ ${prefix}memegen <text|text2>
│ あ ${prefix}fast <video/vn>
│ あ ${prefix}tupai <video/vn>
│ あ ${prefix}vibra <video/vn>
│ あ ${prefix}robot <video/vn>
│ あ ${prefix}slow <video/vn>
│ あ ${prefix}bass <video/vn>
│ あ ${prefix}nightcore <video/vn>
│
├─❒ *「 MENU EDUCATION 」*
│ あ ${prefix}nuliskiri <text>
│ あ ${prefix}nuliskanan <text>
│ あ ${prefix}foliokiri <text>
│ あ ${prefix}foliokanan <text>
│
├─❒ *「 MENU GAMES 」*
│ あ ${prefix}tebakgambar 
│
├─❒ *「 INFO 」*
│ あ ${prefix}owner
│ あ ${prefix}daftar
│
├─❒ *「 MENU OWNER 」*
│ あ ${prefix}broadcast <text>
│ あ ${prefix}leave
│ あ >
│ あ $
│ あ  => 
│
├─❒ *「 MENU GROUP 」*
│ あ ${prefix}antilink 1 / 0
│ あ ${prefix}hidetag <text>
│ あ ${prefix}linkgrup
│ あ ${prefix}tagall
│ あ ${prefix}kick @tag
│ あ ${prefix}setdesc <text>
│ あ ${prefix}setname <text>
│
╰───❒
`
	}
