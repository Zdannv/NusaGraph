'use server';
/**
 * @fileOverview An AI agent that provides detailed explanations for relationships between entities in the knowledge graph.
 *
 * - explainRelationship - A function that generates an AI explanation for a given relationship.
 * - ExplainRelationshipInput - The input type for the explainRelationship function.
 * - ExplainRelationshipOutput - The return type for the explainRelationship function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExplainRelationshipInputSchema = z.object({
  sourceNodeName: z.string().describe('The name of the source entity in the relationship.'),
  targetNodeName: z.string().describe('The name of the target entity in the relationship.'),
  relationshipLabel: z.string().describe('The label describing the relationship between the two entities.'),
});
export type ExplainRelationshipInput = z.infer<typeof ExplainRelationshipInputSchema>;

const ExplainRelationshipOutputSchema = z.string().describe('A detailed AI-generated explanation of the relationship.');
export type ExplainRelationshipOutput = z.infer<typeof ExplainRelationshipOutputSchema>;

export async function explainRelationship(input: ExplainRelationshipInput): Promise<ExplainRelationshipOutput> {
  return explainRelationshipFlow(input);
}

const explainRelationshipPrompt = ai.definePrompt({
  name: 'explainRelationshipPrompt',
  input: {schema: ExplainRelationshipInputSchema},
  output: {schema: ExplainRelationshipOutputSchema},
  prompt: `You are an expert on Indonesian history, culture, and geography, tasked with explaining complex relationships between entities.

Provide a detailed, insightful, and comprehensive explanation of the relationship between '{{{sourceNodeName}}}' and '{{{targetNodeName}}}', which is labeled as '{{{relationshipLabel}}}'.

Elaborate on the historical, cultural, geographical, or thematic context that binds them. Your explanation should be rich in detail, connecting the two entities in a way that deepens the user's understanding of Nusantara heritage.

Ensure the explanation is at least two paragraphs long.`,
});

const explainRelationshipFlow = ai.defineFlow(
  {
    name: 'explainRelationshipFlow',
    inputSchema: ExplainRelationshipInputSchema,
    outputSchema: ExplainRelationshipOutputSchema,
  },
  async input => {
    const {output} = await explainRelationshipPrompt(input);
    return output!;
  }
);
