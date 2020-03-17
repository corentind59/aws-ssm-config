import { SSM } from 'aws-sdk';
import XRay from 'aws-xray-sdk-core';

/**
 * Creates an AWS SSM Parameter Store client from aws-sdk module.
 * @param capture When true, every calls to SSM Parameter Store will be captured by XRay. Defaults to false.
 */
export function createSSM(capture = false) {
    let ssm: SSM | null = null;
    return (() => {
        if (!ssm) {
            ssm = capture ? new SSM() : XRay.captureAWSClient(new SSM()) as SSM;
        }
        return ssm;
    })();
}
