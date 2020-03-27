import { SSM } from 'aws-sdk';
import { SSMConfigClientOptions } from './SSMConfigClientOptions';
import { createSSM } from './SSM';
import { SSMConfigClientInitOptions } from './SSMConfigClientInitOptions';

/**
 * Client used to interact with AWS SSM Parameter Store.
 */
export class SSMConfigClient {
    /**
     * AWS SSM client from aws-sdk module
     */
    private ssm: SSM;

    /**
     * Creates a SSM Client with the provided options.
     * @param options global options for the client. Each options can be overridden by the individual class' methods'
     * options parameter.
     */
    constructor(private options: SSMConfigClientInitOptions) {
        this.ssm = createSSM(options.capture ?? false);
    }

    /**
     * Retrieves a parameter from the SSM Parameter Store.
     * @param key the key that will be appended to the base path.
     * @param options Can be used to override global options provided in the constructor.
     */
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
