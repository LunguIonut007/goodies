package com.lungunaiman.donesti.Users;

public enum EntityType {
    DONOR(0),
    ORGANIZATION_ADMIN(1),
    ORGANIZATION_RECEIVER(2);

    int value;

    // always a power of 2, to be encoded binary
    EntityType(int x) {
        value = x;
    }

    int getValue() {
        return value;
    }
}
