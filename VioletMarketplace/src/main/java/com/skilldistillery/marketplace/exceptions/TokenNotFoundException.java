package com.skilldistillery.marketplace.exceptions;

public class TokenNotFoundException extends RuntimeException {

    public TokenNotFoundException() { super(); }

    public TokenNotFoundException(String message) {
        super(message);
    }

    public TokenNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }

    public TokenNotFoundException(Throwable cause) {
        super(cause);
    }
}
