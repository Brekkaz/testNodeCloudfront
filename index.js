const cfsign = require('@aws-sdk/cloudfront-signer');

let AWS_CLOUDFRONT_PRIVATE_KEY = `-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC+CKvL+iPgMUHL
FISg8RAr2yUalA5bpFp0efdQtc/O1qdbyTBqqBgmUfZ346+FuX/cwegmmC3giyeK
jKC4qbyFa6ov7xByex4TCIxLY9wQ9vNfIvXG/sIg/1jeBQjScbBLyHPODCsHs6iZ
NeQ3//loZsxQxM1ulZtMx0IJbQ39IHhj7pZRYgEZ/FZnTTSZsFEeMOIo2VqFCkvW
7e9wkaoJc+163T2OVQE7coueI1kO9G/aSTGWZ9tHvRuK/TKx/0EuFzHcK540qamg
YO9MP/PNcVCctvKkUnTR0oAJ
-----END PRIVATE KEY-----`;
let AWS_CLOUDFRONT_KEY_PAIR_ID = "K2N00000000040";
let AWS_CLOUDFRONT_URL = "https://dns.cloudfront.net";
let key = "messages/images/req.claim_sub/2e84dc99-d488-4092-874f-97aea359c486.png";

let cloudfrontConfig = {
    keyPairId: AWS_CLOUDFRONT_KEY_PAIR_ID,
    privateKey: AWS_CLOUDFRONT_PRIVATE_KEY,
    url: AWS_CLOUDFRONT_URL,
    dateLessThan: new Date(
        Date.now() +
        1000 * 60 * 2880,
    ),
};

let url_presigned = cfsign.getSignedUrl({
    keyPairId: cloudfrontConfig.keyPairId,
    privateKey: cloudfrontConfig.privateKey,
    url: cloudfrontConfig.url + "/" + key,
    dateLessThan: cloudfrontConfig.dateLessThan,
});

console.log(url_presigned);
