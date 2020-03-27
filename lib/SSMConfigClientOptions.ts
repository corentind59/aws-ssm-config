/**
 * Interface describing options to be passed to the {@link SSMConfigClient}'s methods.
 */
export interface SSMConfigClientOptions {
    /**
     * Base path to search in SSM Parameter Store.
     */
    basePath: string;

    /**
     * When true, parameters of type SecureString will be be decrypted on-fly. Defaults to false.
     */
    withDecryption?: boolean;
}
