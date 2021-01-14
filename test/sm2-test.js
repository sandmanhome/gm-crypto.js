'use strict';
/* global describe it */

var gmCrypto = require('../lib');

describe('SM2', function () {
  it('generateKeyPairHex', function () {
    let keypair = gmCrypto.sm2.generateKeyPairHex();
    console.log(keypair);
  });

  it('generateKeyPairHex', function () {
    let keypair = gmCrypto.sm2.generateKeyPairHex()

    let publicKey = keypair.publicKey
    let privateKey = keypair.privateKey

    // 纯签名 + 生成椭圆曲线点 + sm3杂凑
    const msgString = 'absasdagfadgadsfdfdsf'
    const msgHexString ='123456ef'
    let msgHex = gmCrypto.utils.toArray(msgHexString, 'hex')
    console.log(msgHex)
    let sigValueHex4 = gmCrypto.sm2.doSignature(msgHex, privateKey, {
        hash: true,
    })
    console.log(sigValueHex4)
    let verifyResult4 = gmCrypto.sm2.doVerifySignature(msgHex, sigValueHex4, publicKey, {
        hash: true,
    })
    console.log(verifyResult4)
  });

});
