import { html } from 'lit';
import './src/CodeSnippet';

export default {
  title: 'Constellations/CodeSnippet',

  component: 'space-code-snippet',
  argTypes: {
    code: { control: 'text' },
    theme: {
      control: { type: 'radio' },
      options: ['dark', 'light', 'color'],
    },
  },
};

interface Args {
  code: string;
  theme: string;
}

const Template = ({ code, theme }: Args) => {
  return html`
    <space-code-snippet theme=${theme} .code=${code}></space-code-snippet>
  `;
};

export const Default = Template.bind({});

Default.args = {
  code: `<pre name="code" class="brush: erlang"><![CDATA[
-module(trim).
-export([string_strip_right/1, reverse_tl_reverse/1, bench/0]).
bench() -> [nbench(N) || N <- [1,1000,1000000]].
nbench(N) -> {N, bench(["a" || _ <- lists:seq(1,N)])}.
bench(String) ->
    {{string_strip_right,
    lists:sum([
        element(1, timer:tc(trim, string_strip_right, [String]))
        || _ <- lists:seq(1,1000)])},
    {reverse_tl_reverse,
    lists:sum([
        element(1, timer:tc(trim, reverse_tl_reverse, [String]))
        || _ <- lists:seq(1,1000)])}}.
string_strip_right(String) -> string:strip(String, right, $\n).
reverse_tl_reverse(String) ->
    lists:reverse(tl(lists:reverse(String))).
]]></pre>`,
  theme: 'dark',
};
