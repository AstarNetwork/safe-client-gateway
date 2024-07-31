import { SafeCreatedEventSchema } from '@/routes/hooks/entities/schemas/safe-created.schema';
import { z } from 'zod';

export type SafeCreated = z.infer<typeof SafeCreatedEventSchema>;
