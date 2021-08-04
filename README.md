# Tencent Cloud IM Server SDK in Java

[![license](https://img.shields.io/github/license/doocs/qcloud-im-server-sdk-java?color=42b883&style=flat-square)](./LICENSE)

## Installation and Getting Started

### 1. Maven Configuration

Add the Maven dependency:

```xml
<dependency>
  <groupId>io.github.doocs</groupId>
  <artifactId>im-server-sdk-java</artifactId>
  <version>0.0.2</version>
</dependency>
```

### 2. Getting Started

Here is a quick teaser of an application using IM SDK in Java:

```java
public class Main {
    public static void main(String[] args) {
        // type your sdkAppId here
        long appId = 1400554812;
        
        // type your adminUserId here
        String identifier = "test";
        
        // type your applicationKey here
        String key = "60c6c5925f3ae52c7325ac5a8ec78e44c056d1dd84d54e12ffa39911267a2a70";
        
        // create ImClient instance
        IMClient client = IMClient.getInstance(appId, identifier, key);

        // import account
        AccountImportRequest request = new AccountImportRequest();
        request.setFaceUrl("https://avatars.githubusercontent.com/u/21008209?v=4");
        request.setIdentifier("ylb");
        request.setNick("nickname");
        try {
            AccountImportResult result = client.account.accountImport(request);
            System.out.println(result);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

## License

Apache 2.0 license.
