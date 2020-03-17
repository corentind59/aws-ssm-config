import { SSM } from 'aws-sdk';
import XRay from 'aws-xray-sdk-core';

export function createSSM(capture = false) {
    let ssm: SSM | null = null;
    return (() => {
        if (!ssm) {
            ssm = capture ? new SSM() : XRay.captureAWSClient(new SSM()) as SSM;
        }
        return ssm;
    })();
}
