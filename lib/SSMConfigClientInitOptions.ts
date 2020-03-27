import { SSMConfigClientOptions } from './SSMConfigClientOptions';

/**
 * Interface describing options to be passed to {@link SSMConfigClient}'s constructor.
 */
export interface SSMConfigClientInitOptions<T> extends SSMConfigClientOptions {
    /**
     * When true, every calls to SSM Parameter Store will be captured by XRay. Defaults to false.
     */
    capture?: boolean;

    /**
     * Set this field to config to be used when not in AWS environment. If this is set to null or false, or not set at
     * all, it will fetch configuration from SSM Parameter Store (this is the default behavior).
     */
    config?: T | null | false;
}
