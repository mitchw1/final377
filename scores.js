// File: api/scores.js
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { data, error } = await supabase.from('scores').select('*').order('date', { ascending: false });
    if (error) return res.status(500).json({ error });
    return res.status(200).json(data);
  } else if (req.method === 'POST') {
    const { course, score, date } = req.body;
    const { data, error } = await supabase.from('scores').insert([{ course, score, date }]);
    if (error) return res.status(500).json({ error });
    return res.status(201).json(data);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}