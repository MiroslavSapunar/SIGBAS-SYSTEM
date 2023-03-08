export type Internship = {

    id: String,
    startingDate: String,
    endingDate: String,
    totalAmount: String,
    monthlyAmount: String,
    guidingTeacher: String,
    guidingExternal: String,
    receiptNumber: String,
    billingStatus: String,
    // individualAgreement: IndividualAgreement,
    individualAgreementId: String,
    // frameworkAgreement: FrameworkAgreement,
    frameworkAgreementId: String,
    IntershipEvaluation: InternshipEvaluation
}

type InternshipEvaluation = {
    id: String,
    score: String,
    comments: String,
    intershipId: String
}
