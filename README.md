# decisioning-poc3

# v.1.1.1
#### Input: 
 - some weird param;
 - loan amount.

#### Output:
 - version;
 - inputs;
 - approved.

A loan is approved if some weird param = true.

# v.1.2.1
#### Input: 
 - fico;
 - loan amount.

#### Output:
 - version;
 - inputs;
 - approved.

A loan is approved if fico > 640.

# v.1.2.2
#### Input: 
 - fico;
 - loan amount.

#### Output:
 - version;
 - inputs;
 - approved.

A loan is approved if fico >= 640 (fixed a bug).

# v.2.1.1
#### Input: 
 - fico;
 - bk;
 - dti;
 - income;
 - loan amount.

#### Output:
 - version;
 - inputs;
 - approved;
 - some unneeded output.

A loan is approved if it passes 2 minimum requirement rules (gold rule 1, gold rule 2) and the group rule. 
Gold rule 1 is met if fico >= 640.
Gold rule 2 is met if bk < 1000.
The group rule is met if loan amount doesn't exceed the max loan amount.
Max loan amount depends on the fico score.

# v.2.2.1
#### Input: 
 - fico;
 - bk;
 - dti;
 - income;
 - loan amount;
 - roof and battery amount.

#### Output:
 - version;
 - inputs;
 - approved.

The logic is the same but some unneeded output was removed and max loan amount values were updated.

# v.2.3.1
#### Input: 
 - fico;
 - bk;
 - dti;
 - income;
 - loan amount;
 - roof and battery amount.

#### Output:
 - version;
 - inputs;
 - roof and battery eligible;
 - approved.

A loan is approved if it passes 2 minimum requirement rules (gold rule 1, gold rule 2) and the group rule. 
Gold rule 1 is met if fico >= 640.
Gold rule 2 is met if bk < 1000.
The group rule is met if loan amount doesn't exceed the max loan amount.
Max loan amount depends on the fico score.
The updated policy also indicates roof and battery eligibility.
