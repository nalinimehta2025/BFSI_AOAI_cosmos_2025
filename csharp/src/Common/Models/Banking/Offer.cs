﻿namespace MultiAgentCopilot.Common.Models.Banking
{
    public class Offer
    {
        public required string Id { get; set; }
        public required string TenantId { get; set; }
        public required string Name { get; set; }
        public required string Description { get; set; }
        public required AccountType AccountType { get; set; }
        public required Dictionary<string, string> EligibilityConditions { get; set; }
        public required Dictionary<string, string> PrerequsiteSubmissions { get; set; }
    }
}