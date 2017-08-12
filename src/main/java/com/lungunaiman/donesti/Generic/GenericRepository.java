package com.lungunaiman.donesti.Generic;

import org.springframework.data.querydsl.QueryDslPredicateExecutor;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.PagingAndSortingRepository;

@NoRepositoryBean
public interface GenericRepository<T extends GenericEntity> extends
                        PagingAndSortingRepository<T, Integer>, QueryDslPredicateExecutor<T> {
}
