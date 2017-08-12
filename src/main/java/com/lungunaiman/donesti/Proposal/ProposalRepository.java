package com.lungunaiman.donesti.Proposal;

import com.lungunaiman.donesti.Generic.GenericInterface;
import org.springframework.data.querydsl.QueryDslPredicateExecutor;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProposalRepository extends GenericInterface<Proposal> {
}
