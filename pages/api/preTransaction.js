const https = require("https");
const PaytmChecksum = require("paytmchecksum");
// const Paytm = require("paytmchecksum");
export default async function handler(req, res) {
  var paytmParams = {};
  console.log("req body :>>",req.body)
  paytmParams.body = {
    requestType: "Payment",
    mid: process.env.NEXT_PUBLIC_PAYTM_MID,
    websiteName: "YOUR_WEBSITE_NAME",
    orderId: req.body.oId,
    callbackUrl: `${process.env.NEXT_PUBLIC_HOST}/api/postTransaction`,
    txnAmount: {
      value: req.body.subTotal,
      currency: "INR",
    },
    userInfo: {
      custId: req.body.email,
    },
  };
  // console.log("paytm params body:>>",paytmParams.body)
  /*
   * Generate checksum by parameters we have in body
   * Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys
   */
  // console.log("process env NEXT_PUBLIC_PAYTM_MKEY>>",process.env.NEXT_PUBLIC_PAYTM_MKEY)
  const checksum = await PaytmChecksum.generateSignature(
    JSON.stringify(paytmParams.body),
    process.env.NEXT_PUBLIC_PAYTM_MKEY
  )
  console.log("checksum",checksum)
    paytmParams.head = {
      signature: checksum,
    };

    var post_data = JSON.stringify(paytmParams);

    const requestAsync = () => {
      return Promise((resolve, reject) => {
        var options = {
          /* for Staging */
          // hostname: "securegw-stage.paytm.in"
          /* for Production */
          hostname: "securegw.paytm.in",

          port: 443,
          path: `/theia/api/v1/initiateTransaction?mid=${process.env.NEXT_PUBLIC_PAYTM_MID}&orderId=ORDERID_98765`,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Content-Length": post_data.length,
          },
        };

        var response = "";
        var post_req = https.request(options, function (post_res) {
          post_res.on("data", function (chunk) {
            response += chunk;
          });

          post_res.on("end", function () {
            console.log("Response: ", response);
            resolve(response);
          });
        });

        post_req.write(post_data);
        post_req.end();
      });
    };

    const myReq = await requestAsync()
    res.status(200).json(myReq)
}
