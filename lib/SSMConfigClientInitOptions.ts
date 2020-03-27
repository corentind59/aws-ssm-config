import { SSMConfigClientOptions } from './SSMConfigClientOptions';

/**
 * Interface describing options to be passed to {@link SSMConfigClient}'s constructor.
 */
export interface SSMConfigClientInitOptions extends SSMConfigClientOptions {
    /**
     * When true, every calls to SSM Parameter Store will be captured by XRay. Defaults to false.
     */
    capture?: boolean;
}
