const net = new brain.NeuralNetwork();

const data = [{ "input": { "r": 0, "g": 0, "b": 0 }, "output": [1] }, { "input": { "r": 1, "g": 1, "b": 1 }, "output": [0] }, { "input": { "r": 0.9954652682207652, "g": 0.3141820213846087, "b": 0.88267699597007 }, "output": [0] }, { "input": { "r": 0.6088497835533644, "g": 0.9116010160434544, "b": 0.07603673727890325 }, "output": [0] }, { "input": { "r": 0.3861590143981726, "g": 0.9066758871624929, "b": 0.3061192951229885 }, "output": [0] }, { "input": { "r": 0.03917284880541283, "g": 0.26873636272129153, "b": 0.07102124247926556 }, "output": [1] }, { "input": { "r": 0.47088899389495653, "g": 0.5975208218832668, "b": 0.36421415082874975 }, "output": [1] }, { "input": { "r": 0.028975815804499705, "g": 0.8031249753228378, "b": 0.14961694774366818 }, "output": [0] }, { "input": { "r": 0.09904360145137714, "g": 0.0005302723538973542, "b": 0.9975474952505217 }, "output": [0] }, { "input": { "r": 0.28784200120930836, "g": 0.24238151725815849, "b": 0.6516972563280066 }, "output": [0] }, { "input": { "r": 0.3322272067117453, "g": 0.800674825499369, "b": 0.5109015830092793 }, "output": [1] }, { "input": { "r": 0.6370720775529766, "g": 0.3587751956764993, "b": 0.04157900177779594 }, "output": [0] }, { "input": { "r": 0.009062805761480996, "g": 0.3311679792576818, "b": 0.4491497447848831 }, "output": [0] }, { "input": { "r": 0.4995942534177207, "g": 0.8913881672416986, "b": 0.9290228439555672 }, "output": [1] }, { "input": { "r": 0.802646966935203, "g": 0.7771307110600445, "b": 0.0828014755283244 }, "output": [1] }, { "input": { "r": 0.2957696432560306, "g": 0.3933350118827559, "b": 0.7052204141206311 }, "output": [1] }, { "input": { "r": 0.98024406041423, "g": 0.4732239504174205, "b": 0.3483357257077022 }, "output": [0] }, { "input": { "r": 0.7481605557528677, "g": 0.44828326460485957, "b": 0.6633452645425733 }, "output": [0] }, { "input": { "r": 0.5302710796168923, "g": 0.6659716955731463, "b": 0.012367270378150108 }, "output": [0] }, { "input": { "r": 0.2126297500093215, "g": 0.716757715783521, "b": 0.02780896707137659 }, "output": [0] }, { "input": { "r": 0.8162296268113136, "g": 0.18273400942756246, "b": 0.19527361533033427 }, "output": [0] }, { "input": { "r": 0.38398843885769196, "g": 0.9145668417064017, "b": 0.3465474624445912 }, "output": [1] }, { "input": { "r": 0.1308214161172334, "g": 0.3169487905277337, "b": 0.8140021116637686 }, "output": [0] }, { "input": { "r": 0.8809843514055675, "g": 0.6716122152367807, "b": 0.31286050120515685 }, "output": [1] }, { "input": { "r": 0.8156314097361894, "g": 0.3187314054279795, "b": 0.926301768266097 }, "output": [0] }, { "input": { "r": 0.48729488254588627, "g": 0.2648694302542094, "b": 0.5145587608187792 }, "output": [0] }, { "input": { "r": 0.764967085620631, "g": 0.9368911607721495, "b": 0.8043874361914662 }, "output": [1] }, { "input": { "r": 0.35919230885402875, "g": 0.29065237773495456, "b": 0.34107104260386545 }, "output": [0] }, { "input": { "r": 0.9968840936409895, "g": 0.9450809180619042, "b": 0.6830668002920206 }, "output": [1] }, { "input": { "r": 0.7112841031020696, "g": 0.9977050450876488, "b": 0.23947828458307474 }, "output": [0] }, { "input": { "r": 0.19627868388644099, "g": 0.4865495506667681, "b": 0.8761373381048336 }, "output": [1] }, { "input": { "r": 0.3635782906043401, "g": 0.942143952666761, "b": 0.12524349064287432 }, "output": [0] }, { "input": { "r": 0.5609366142422207, "g": 0.3601194562632035, "b": 0.1965825417902447 }, "output": [1] }, { "input": { "r": 0.12176638157656305, "g": 0.8471659373624649, "b": 0.47388967808273974 }, "output": [0] }, { "input": { "r": 0.7920500539704747, "g": 0.7424739662119484, "b": 0.41328991815027427 }, "output": [0] }, { "input": { "r": 0.2097209554334971, "g": 0.08191779652706077, "b": 0.8954044303136219 }, "output": [1] }, { "input": { "r": 0.06475637914637389, "g": 0.12105106345495131, "b": 0.6206572728943769 }, "output": [1] }, { "input": { "r": 0.9741008846335302, "g": 0.7625860741921817, "b": 0.718185729226005 }, "output": [0] }, { "input": { "r": 0.5028842633454209, "g": 0.9053219336296277, "b": 0.15644208316107688 }, "output": [0] }, { "input": { "r": 0.3101769092756812, "g": 0.06723421363340387, "b": 0.7389135227872643 }, "output": [1] }, { "input": { "r": 0.42136678460845545, "g": 0.5648594230535027, "b": 0.5345844568781386 }, "output": [0] }, { "input": { "r": 0.5982112294958981, "g": 0.3811461256920825, "b": 0.9909204268371898 }, "output": [1] }, { "input": { "r": 0.9592911497064172, "g": 0.05628788765178383, "b": 0.4733993424091958 }, "output": [1] }, { "input": { "r": 0.10624211114694315, "g": 0.5710600540966284, "b": 0.5775143033059582 }, "output": [0] }, { "input": { "r": 0.24154689730678647, "g": 0.4240622234337845, "b": 0.05710975815558994 }, "output": [1] }, { "input": { "r": 0.7655395885058234, "g": 0.48148998338467486, "b": 0.7528502307870666 }, "output": [0] }, { "input": { "r": 0.2812635842576132, "g": 0.6964932954707532, "b": 0.867036837960518 }, "output": [0] }, { "input": { "r": 0.4597104909278462, "g": 0.1849325332120717, "b": 0.2530764463328443 }, "output": [1] }, { "input": { "r": 0.7818122691147498, "g": 0.6007729848520362, "b": 0.07836678899078597 }, "output": [0] }, { "input": { "r": 0.6073092328065455, "g": 0.1520417526393516, "b": 0.5083490906833941 }, "output": [1] }, { "input": { "r": 0.05237348827191268, "g": 0.9935926725577418, "b": 0.13512466179180427 }, "output": [0] }, { "input": { "r": 0.3486074833011239, "g": 0.20517186037575597, "b": 0.9734221196457924 }, "output": [1] }, { "input": { "r": 0.8653123454158691, "g": 0.4143504270575844, "b": 0.13134522271922044 }, "output": [0] }, { "input": { "r": 0.18583147419766055, "g": 0.26486376568830705, "b": 0.31392600946486526 }, "output": [1] }, { "input": { "r": 0.2368518333845726, "g": 0.0038302447721074717, "b": 0.554659210915686 }, "output": [1] }, { "input": { "r": 0.6428468421017561, "g": 0.6627637747538888, "b": 0.5718293932005796 }, "output": [0] }, { "input": { "r": 0.5030572093124628, "g": 0.6936742827521731, "b": 0.4069869934695305 }, "output": [0] }, { "input": { "r": 0.17348777772931223, "g": 0.3458008900628844, "b": 0.594170084667698 }, "output": [1] }, { "input": { "r": 0.9885567713345291, "g": 0.9340453790866976, "b": 0.19659580306964175 }, "output": [0] }, { "input": { "r": 0.09297511471386888, "g": 0.4602318183915466, "b": 0.25164903814007555 }, "output": [1] }, { "input": { "r": 0.7276942208261743, "g": 0.018954276566401473, "b": 0.6340863838616397 }, "output": [1] }, { "input": { "r": 0.22070367542808045, "g": 0.49393938697533923, "b": 0.10840074587533732 }, "output": [1] }, { "input": { "r": 0.05626302018501028, "g": 0.825926992475837, "b": 0.39364799568784714 }, "output": [0] }, { "input": { "r": 0.31699978120617067, "g": 0.12865782764739064, "b": 0.2526527873210356 }, "output": [1] }, { "input": { "r": 0.2999049632430806, "g": 0.16144396609009215, "b": 0.48040522607529756 }, "output": [1] }, { "input": { "r": 0.03752462296083814, "g": 0.38197792445424095, "b": 0.8665270458568257 }, "output": [0] }, { "input": { "r": 0.8949013170893618, "g": 0.1552773794360678, "b": 0.13527250383434875 }, "output": [1] }, { "input": { "r": 0.8825971952475933, "g": 0.5270588722740883, "b": 0.1781444896594484 }, "output": [0] }, { "input": { "r": 0.9924409787190385, "g": 0.9233120977082458, "b": 0.4213187068620614 }, "output": [0] }, { "input": { "r": 0.32199535794585876, "g": 0.35857658204340703, "b": 0.640085418929196 }, "output": [1] }, { "input": { "r": 0.6882616846593246, "g": 0.5746126760129366, "b": 0.5155785832700912 }, "output": [1] }, { "input": { "r": 0.5947845618482075, "g": 0.20101310722144183, "b": 0.14672536343604592 }, "output": [1] }, { "input": { "r": 0.7152562895231644, "g": 0.8943213775759618, "b": 0.5497954931751952 }, "output": [0] }, { "input": { "r": 0.38893652514564714, "g": 0.912782910517181, "b": 0.16168470836614168 }, "output": [0] }, { "input": { "r": 0.45641132636080983, "g": 0.5240732261935601, "b": 0.10072099194501272 }, "output": [1] }, { "input": { "r": 0.728739040641101, "g": 0.042224009305053656, "b": 0.015756810217555373 }, "output": [1] }, { "input": { "r": 0.20864322580417505, "g": 0.3553293252330394, "b": 0.12092547929881614 }, "output": [1] }, { "input": { "r": 0.7971325554297488, "g": 0.7488947423769361, "b": 0.09796052179576176 }, "output": [0] }, { "input": { "r": 0.19193286799179843, "g": 0.46082715587115297, "b": 0.9672827363350684 }, "output": [1] }, { "input": { "r": 0.11269457579851339, "g": 0.5455902074134202, "b": 0.91381210024267 }, "output": [1] }, { "input": { "r": 0.8444623623122731, "g": 0.8848416596990416, "b": 0.9397911775093786 }, "output": [0] }, { "input": { "r": 0.46157293218756323, "g": 0.9832370863490274, "b": 0.9363526562960942 }, "output": [0] }, { "input": { "r": 0.14092805239934858, "g": 0.3526024305671196, "b": 0.9888646022627616 }, "output": [1] }, { "input": { "r": 0.22446902006870006, "g": 0.46039148492243576, "b": 0.126777580412883 }, "output": [1] }, { "input": { "r": 0.010897915523570001, "g": 0.3889638489008125, "b": 0.16130510348452298 }, "output": [1] }, { "input": { "r": 0.037840636199021116, "g": 0.9747562228825033, "b": 0.7446245321657265 }, "output": [0] }, { "input": { "r": 0.2606779883501995, "g": 0.3336227315863418, "b": 0.38426631202454575 }, "output": [1] }, { "input": { "r": 0.9831472395900982, "g": 0.7979782026828779, "b": 0.45499018003080804 }, "output": [0] }, { "input": { "r": 0.8476913427882729, "g": 0.6565912987252371, "b": 0.6544019983026157 }, "output": [1] }, { "input": { "r": 0.3708728930819012, "g": 0.6596177004606503, "b": 0.4386368423725471 }, "output": [1] }, { "input": { "r": 0.7206966136178268, "g": 0.6705584989919033, "b": 0.6168156332305645 }, "output": [1] }, { "input": { "r": 0.8618668219665937, "g": 0.774585667560951, "b": 0.7743303611987082 }, "output": [0] }, { "input": { "r": 0.01294016983900348, "g": 0.5277883123923142, "b": 0.8059515106137529 }, "output": [1] }, { "input": { "r": 0.22065918948429708, "g": 0.4055404150836657, "b": 0.4630375100058355 }, "output": [1] }, { "input": { "r": 0.9513350589302689, "g": 0.4546475342369034, "b": 0.642937438327362 }, "output": [1] }, { "input": { "r": 0.6803018445432445, "g": 0.4020486382421713, "b": 0.7221955583177129 }, "output": [1] }, { "input": { "r": 0.40094515339545733, "g": 0.8552098295967783, "b": 0.5616508962181899 }, "output": [0] }, { "input": { "r": 0.532919033099641, "g": 0.6109331379468947, "b": 0.3503896359913212 }, "output": [1] }, { "input": { "r": 0.8349855021019823, "g": 0.36362765049178636, "b": 0.7387051832859268 }, "output": [1] }, { "input": { "r": 0.7682706288185959, "g": 0.18906036476406274, "b": 0.09193061444166117 }, "output": [1] }, { "input": { "r": 0.1820439144303001, "g": 0.25464325777100516, "b": 0.28057600952480355 }, "output": [1] }, { "input": { "r": 0.8540142608166439, "g": 0.602028611781374, "b": 0.07909289957285193 }, "output": [1] }, { "input": { "r": 0.9785833901948233, "g": 0.018880238025736684, "b": 0.9943406585885417 }, "output": [0] }, { "input": { "r": 0.9513642833711118, "g": 0.24010565153382957, "b": 0.4387917214477033 }, "output": [1] }, { "input": { "r": 0.6806180342681096, "g": 0.23372100560857523, "b": 0.1292220004782194 }, "output": [1] }, { "input": { "r": 0.31459096552969856, "g": 0.9772241766165464, "b": 0.20347376107539938 }, "output": [0] }, { "input": { "r": 0.18668674024106457, "g": 0.340446269596395, "b": 0.7057357785650611 }, "output": [1] }, { "input": { "r": 0.8351134314542215, "g": 0.7126603263768196, "b": 0.6553066749385295 }, "output": [1] }, { "input": { "r": 0.9438854307240139, "g": 0.5631149738477665, "b": 0.4918041361613956 }, "output": [1] }, { "input": { "r": 0.975639471808516, "g": 0.7669393124288229, "b": 0.7129433802743623 }, "output": [0] }, { "input": { "r": 0.5476454491273668, "g": 0.08360519252565113, "b": 0.7406587772107347 }, "output": [1] }, { "input": { "r": 0.16729337078708717, "g": 0.34962377640630016, "b": 0.14822260599362047 }, "output": [1] }, { "input": { "r": 0.04552942134425497, "g": 0.7703614138886985, "b": 0.13722538095478565 }, "output": [1] }, { "input": { "r": 0.06519197982434033, "g": 0.5954264011172417, "b": 0.28628763630666354 }, "output": [1] }, { "input": { "r": 0.891197825320164, "g": 0.8943002566796134, "b": 0.1749205794527522 }, "output": [0] }, { "input": { "r": 0.8284844291059619, "g": 0.6552765812091259, "b": 0.12627629354420744 }, "output": [1] }, { "input": { "r": 0.5434746801383579, "g": 0.06384524478005682, "b": 0.3701891627824476 }, "output": [1] }, { "input": { "r": 0.982487524439341, "g": 0.4804488270276135, "b": 0.9508415991747836 }, "output": [0] }, { "input": { "r": 0.8835211301827675, "g": 0.5198859667054698, "b": 0.5480428838454086 }, "output": [1] }, { "input": { "r": 0.7123121912621075, "g": 0.0008346113030623936, "b": 0.4511558735140233 }, "output": [1] }, { "input": { "r": 0.6186530502317538, "g": 0.17577073065650572, "b": 0.07682044860414083 }, "output": [1] }];;

net.train(data);

const colorEl = document.getElementById('color');
const pogEl = document.getElementById('pog');
const whiteButton = document.getElementById('white-button');
const blackButton = document.getElementById('black-button');
const printButton = document.getElementById('print-button');

let color;

setRandomColor();

whiteButton.addEventListener('click', () => {
  chooseColor(1);
});

blackButton.addEventListener('click', () => {
  chooseColor(0);
});

function chooseColor(value) {
  data.push({
    input: color,
    output: [value],
  });

  setRandomColor();
}

printButton.addEventListener('click', print);

function print() {
  console.log(JSON.stringify(data));
}

function setRandomColor() {
  color = {
    r: Math.random(),
    g: Math.random(),
    b: Math.random(),
  };

  const pog = net.run(color)[0];

  pogEl.style.color = pog > .5 ? '#FFF' : '#000';
  colorEl.style.backgroundColor = `
    rgba(${color.r * 255}, ${color.g * 255}, ${color.b * 255})
  `;
}