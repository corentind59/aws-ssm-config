/**
 * Interface describing options to be passed to the {@link SSMConfigClient}.
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

    /**
     * When true, every calls to SSM Parameter Store will be captured by XRay. Defaults to false.
     */
    capture?: boolean;
}
