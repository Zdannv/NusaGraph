'use server';
/**
 * @fileOverview A Genkit flow for generating a concise AI summary of a cultural entity node.
 *
 * - summarizeNode - A function that handles the AI summary generation process.
 * - SummarizeNodeInput - The input type for the summarizeNode function.
 * - SummarizeNodeOutput - The return type for the summarizeNode function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeNodeInputSchema = z.object({
  name: z.string().describe('The name of the cultural entity node.'),
  description: z
    .string()
    .describe('A detailed description of the cultural entity.'),
  era: z.string().optional().describe('The historical era associated with the entity.'),
  location: z.string().optional().describe('The geographical location associated with the entity.'),
  group: z
    .string()
    .optional()
    .describe('The category or group the entity belongs to (e.g., Seni, Sejarah).'),
});
export type SummarizeNodeInput = z.infer<typeof SummarizeNodeInputSchema>;

const SummarizeNodeOutputSchema = z.object({
  summary: z.string().describe('A concise, AI-generated summary of the cultural entity.'),
});
export type SummarizeNodeOutput = z.infer<typeof SummarizeNodeOutputSchema>;

export async function summarizeNode(input: SummarizeNodeInput): Promise<SummarizeNodeOutput> {
  return summarizeNodeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeNodePrompt',
  input: {schema: SummarizeNodeInputSchema},
  output: {schema: SummarizeNodeOutputSchema},
  prompt: `You are an expert on Indonesian cultural heritage. Your task is to provide a concise, insightful summary of the given cultural entity.

Focus on its key information, significance, and relevance within Indonesian culture. The summary should be easy to understand and brief, suitable for a quick overview.

Cultural Entity Details:
Name: {{{name}}}
Description: {{{description}}}
{{#if era}}Era: {{{era}}}{{/if}}
{{#if location}}Location: {{{location}}}{{/if}}
{{#if group}}Category: {{{group}}}{{/if}}

Generate a concise summary of the cultural entity based on the information provided. The summary should be no more than 3-4 sentences.`,
});

const summarizeNodeFlow = ai.defineFlow(
  {
    name: 'summarizeNodeFlow',
    inputSchema: SummarizeNodeInputSchema,
    outputSchema: SummarizeNodeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    if (!output) {
      throw new Error('Failed to generate summary.');
    }
    return output;
  }
);
