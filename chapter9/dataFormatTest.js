function myFuncion() {
    const header = new ArrayBuffer(44);
    var d = new DataView(header);
    d.setUint8(0, "R".charCodeAt(0));
    d.setUint8(1, "I".charCodeAt(0));
    d.setUint8(2, "F".charCodeAt(0));
    d.setUint8(3, "F".charCodeAt(0));

    d.setUint8(8, "W".charCodeAt(0));
    d.setUint8(9, "A".charCodeAt(0));
    d.setUint8(10, "V".charCodeAt(0));
    d.setUint8(11, "E".charCodeAt(0));
    d.setUint8(12, "f".charCodeAt(0));
    d.setUint8(13, "m".charCodeAt(0));
    d.setUint8(14, "t".charCodeAt(0));
    d.setUint8(15, " ".charCodeAt(0));

    d.setUint32(16, 16, true);
    d.setUint16(20, 1, true);
    d.setUint16(34, 16, true);

    d.setUint8(36, "d".charCodeAt(0));
    d.setUint8(37, "a".charCodeAt(0));
    d.setUint8(38, "t".charCodeAt(0));
    d.setUint8(39, "a".charCodeAt(0));

    const tmp = new Uint8Array(d.byteLength);

    tmp.set(new Uint8Array(header), 0);

    var s = String.fromCharCode.apply(null, tmp);
    console.log(s);
    return tmp.buffer;
}

console.log(myFuncion());
