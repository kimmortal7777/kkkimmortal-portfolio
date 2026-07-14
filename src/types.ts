/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  image: string;
  url: string;
  category: 'current' | 'past';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  feedback: string;
}
