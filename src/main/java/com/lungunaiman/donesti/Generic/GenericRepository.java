package com.lungunaiman.donesti.Generic;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QueryDslPredicateExecutor;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface GenericRepository<T extends GenericEntity> extends
        JpaRepository<T, Integer>, QueryDslPredicateExecutor<T> {
}
