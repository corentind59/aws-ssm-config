import { SSM } from 'aws-sdk';
import { SSMConfigClientOptions } from './SSMConfigClientOptions';
import { createSSM } from './SSM';

export class SSMConfigClient {
    private ssm: SSM;

    constructor(private options: SSMConfigClientOptions) {
        this.ssm = createSSM(options.capture ?? false);
    }

    public async getByKey(key: string, options?: SSMConfigClientOptions) {
        const basePath = options?.basePath ?? this.options.basePath;
        const withDecryption = options?.withDecryption ?? this.options.withDecryption ?? false;
        const params = await this.ssm.getParametersByPath({
            Path: basePath,
            WithDecryption: withDecryption
        }).promise();
        return params.Parameters!.find(({Name}) => Name === key);
    }
}
