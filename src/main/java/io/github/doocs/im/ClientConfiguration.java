package io.github.doocs.im;

import io.github.doocs.im.util.VersionInfoUtil;

/**
 * @author bingo
 * @since 2021/11/2 14:17
 */
public class ClientConfiguration {
    public static final String DEFAULT_USER_AGENT = VersionInfoUtil.getDefaultUserAgent();
    public static final int DEFAULT_MAX_RETRIES = 3;
    public static final boolean DEFAULT_RENEW_SIG = true;
    /**
     * 默认超时时间（毫秒）
     */
    public static final long DEFAULT_CONNECT_TIMEOUT = 3000L;
    public static final long DEFAULT_READ_TIMEOUT = 3000L;
    public static final long DEFAULT_WRITE_TIMEOUT = 3000L;

    /**
     * UserSig 签名默认有效时长（秒）
     */
    public static final long DEFAULT_EXPIRE_TIME = 24 * 60 * 60L;

    private int maxRetries = DEFAULT_MAX_RETRIES;
    private long connectTimeout = DEFAULT_CONNECT_TIMEOUT;
    private long readTimeout = DEFAULT_READ_TIMEOUT;
    private long writeTimeout = DEFAULT_WRITE_TIMEOUT;
    private long expireTime = DEFAULT_EXPIRE_TIME;
    private boolean autoRenewSig = DEFAULT_RENEW_SIG;
    private String userAgent = DEFAULT_USER_AGENT;

    public ClientConfiguration() {
    }

    public ClientConfiguration(int maxRetries, long connectTimeout, long readTimeout, long writeTimeout,
                               long expireTime, boolean autoRenewSig, String userAgent) {
        this.maxRetries = maxRetries;
        this.connectTimeout = connectTimeout;
        this.readTimeout = readTimeout;
        this.writeTimeout = writeTimeout;
        this.expireTime = expireTime;
        this.autoRenewSig = autoRenewSig;
        this.userAgent = userAgent;
    }

    private ClientConfiguration(Builder builder) {
        this.maxRetries = builder.maxRetries;
        this.connectTimeout = builder.connectTimeout;
        this.readTimeout = builder.readTimeout;
        this.writeTimeout = builder.writeTimeout;
        this.expireTime = builder.expireTime;
        this.autoRenewSig = builder.autoRenewSig;
        this.userAgent = builder.userAgent;
    }

    public static Builder builder() {
        return new Builder();
    }

    public int getMaxRetries() {
        return maxRetries;
    }

    public void setMaxRetries(int maxRetries) {
        this.maxRetries = maxRetries;
    }

    public long getConnectTimeout() {
        return connectTimeout;
    }

    public void setConnectTimeout(long connectTimeout) {
        this.connectTimeout = connectTimeout;
    }

    public long getReadTimeout() {
        return readTimeout;
    }

    public void setReadTimeout(long readTimeout) {
        this.readTimeout = readTimeout;
    }

    public long getWriteTimeout() {
        return writeTimeout;
    }

    public void setWriteTimeout(long writeTimeout) {
        this.writeTimeout = writeTimeout;
    }

    public long getExpireTime() {
        return expireTime;
    }

    public void setExpireTime(long expireTime) {
        this.expireTime = expireTime;
    }

    public boolean isAutoRenewSig() {
        return autoRenewSig;
    }

    public void setAutoRenewSig(boolean autoRenewSig) {
        this.autoRenewSig = autoRenewSig;
    }

    public String getUserAgent() {
        return userAgent;
    }

    public void setUserAgent(String userAgent) {
        this.userAgent = userAgent;
    }

    public static final class Builder {
        private int maxRetries = DEFAULT_MAX_RETRIES;
        private long connectTimeout = DEFAULT_CONNECT_TIMEOUT;
        private long readTimeout = DEFAULT_READ_TIMEOUT;
        private long writeTimeout = DEFAULT_WRITE_TIMEOUT;
        private long expireTime = DEFAULT_EXPIRE_TIME;
        private boolean autoRenewSig = DEFAULT_RENEW_SIG;
        private String userAgent = DEFAULT_USER_AGENT;

        private Builder() {
        }

        public ClientConfiguration build() {
            return new ClientConfiguration(this);
        }

        public Builder maxRetries(int maxRetries) {
            this.maxRetries = maxRetries;
            return this;
        }

        public Builder connectTimeout(long connectTimeout) {
            this.connectTimeout = connectTimeout;
            return this;
        }

        public Builder readTimeout(long readTimeout) {
            this.readTimeout = readTimeout;
            return this;
        }

        public Builder writeTimeout(long writeTimeout) {
            this.writeTimeout = writeTimeout;
            return this;
        }

        public Builder expireTime(long expireTime) {
            this.expireTime = expireTime;
            return this;
        }

        public Builder autoRenewSig(boolean autoRenewSig) {
            this.autoRenewSig = autoRenewSig;
            return this;
        }

        public Builder userAgent(String userAgent) {
            this.userAgent = userAgent;
            return this;
        }
    }
}
