package com.lungunaiman.donesti.Generic;

import org.springframework.data.querydsl.QueryDslPredicateExecutor;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.io.Serializable;

@NoRepositoryBean
public interface GenericInterface<T> extends
                        PagingAndSortingRepository<T, Integer>, QueryDslPredicateExecutor<T> {
}
