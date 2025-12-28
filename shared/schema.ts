import { pgTable, text, serial, integer, boolean, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const doctors = pgTable("doctors", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  specialty: text("specialty").notNull(),
  registration: boolean("registration"),
  email: text("email"),
  mobile: text("mobile"),
  image: text("image"),
  morningHours: text("morningHours"),
  eveningHours: text("eveningHours"),
  days: text("days").array(),
  isAvailable: boolean("isAvailable"),
});

export const reviews = pgTable("reviews", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  rating: integer("rating").notNull(),
  text: text("text").notNull(),
  date: text("date"),
  avatar: text("avatar"),
});

export const translations = pgTable("translations", {
    id: serial("id").primaryKey(),
    lang: text("lang").notNull().unique(),
    data: jsonb("data").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type Doctor = typeof doctors.$inferSelect;
export type Review = typeof reviews.$inferSelect;
export type Translation = typeof translations.$inferSelect;
